use near_sdk::{
    env, near_bindgen, ext_contract,
    AccountId, Balance, Promise, PromiseResult,
    PublicKey, PromiseOrValue
};

use std::collections::HashMap;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

near_sdk::setup_alloc!();

#[near_bindgen]
#[derive(Default, BorshDeserialize, BorshSerialize)]
pub struct CanvasCollective {
    artists: HashMap<AccountId, Artist>,
    community_wallet: AccountId,
}

#[derive(BorshDeserialize, BorshSerialize)]
pub struct Artist {
    id: u64,
    name: String,
    earnings: Balance,
    bio: String,  // Artist's biography or description
    portfolio: Vec<String>,  // URLs to the artist's portfolio or work samples
    social_links: HashMap<String, String>,  // Social media links (e.g., Twitter, Instagram)
    bonuses_earned: u64,  // Count of bonuses earned
}

#[ext_contract]
pub trait CommunityWallet {
    fn fund_community_wallet(&mut self);
}

#[ext_contract]
pub trait BonusContract {
    fn check_bonus_criteria(&self) -> bool;
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
        Promise::new(account_id.clone())
            .transfer(artist.earnings)
            .then(ext_community_wallet::fund_community_wallet(
                account_id.clone(),
                1_000_000_000_000_000_000_000, // Amount to fund community wallet
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
            let bonus_amount = 250 * 1_000_000_000 / 1_000_000; // Bonus Amount 250 NEAR tokens (assuming 1 NEAR = 1 USD)
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
