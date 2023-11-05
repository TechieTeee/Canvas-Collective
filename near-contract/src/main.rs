use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{env, near_bindgen};
use std::collections::HashMap;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct CanvasCollective {
    artists: HashMap<AccountId, Artist>,
    community_wallet: AccountId,
}

#[derive(BorshDeserialize, BorshSerialize)]
pub struct Artist {
    id: u64,
    name: String,
    earnings: Balance,
    bio: String,
    portfolio: Vec<String>,
    social_links: HashMap<String, String>,
    bonuses_earned: u64,
}

#[near_bindgen]
impl CanvasCollective {
    pub fn add_artist(&mut self, name: String, bio: String) {
        let account_id = env::signer_account_id();
        let artist = Artist {
            id: env::random_seed(),
            name,
            earnings: 0,
            bio,
            portfolio: Vec::new(),
            social_links: HashMap::new(),
            bonuses_earned: 0,
        };
        self.artists.insert(&account_id, &artist);
    }

    pub fn request_payment(&mut self) {
        let account_id = env::signer_account_id();
        let mut artist = self.artists.get(&account_id).unwrap();
        let amount_to_fund_community_wallet: Balance = 7_000_000_000;
        Promise::new(account_id.clone())
            .transfer(artist.earnings)
            .then(ext_community_wallet::fund_community_wallet(
                account_id.clone(),
                amount_to_fund_community_wallet,
                &self.community_wallet,
                0,
            ));
        artist.earnings = 0;
        self.artists.insert(&account_id, &artist);
    }

    pub fn check_and_reward_bonus(&mut self) {
        let account_id = env::signer_account_id();
        if BonusContract::check_bonus_criteria() {
            let mut artist = self.artists.get(&account_id).unwrap();
            let bonus_amount: Balance = 250_000_000; // Assuming 1 NEAR = 1 USD
            Promise::new(account_id.clone())
                .transfer(bonus_amount)
                .then(ext_community_wallet::fund_community_wallet(
                    account_id.clone(),
                    bonus_amount,
                    &self.community_wallet,
                    0,
                ));
            artist.earnings += bonus_amount;
            artist.bonuses_earned += 1;
            self.artists.insert(&account_id, &artist);
        }
    }
}
