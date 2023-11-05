// Import necessary modules and structs
use std::collections::HashMap;
use near_sdk::{Balance, AccountId};
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::env;
use near_sdk::Promise;

// Define the CanvasCollective struct
#[derive(BorshDeserialize, BorshSerialize)]
pub struct CanvasCollective {
    artists: HashMap<AccountId, Artist>,
    community_wallet: AccountId,
}

// Define the Artist struct
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

// Define the `is_bonus_eligible` function
fn is_bonus_eligible(artist: &Artist) -> bool {
    // Bonus eligibility criteria here
    // For example, bonus eligibility if earnings exceed a certain threshold
    artist.earnings > 10_000.into()
}

// Methods for adding artists and managing their earnings and bonuses
#[ext_contract]
impl CanvasCollective {
    #[init]
    pub fn new() -> Self {
        Self {
            artists: HashMap::new(),
            community_wallet: env::signer_account_id(),
        }
    }

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
        let mut artist = self.artists.get_mut(&account_id).unwrap();

        let amount_to_fund_community_wallet: Balance = 7_000_000_000;

        // Transfer artist's earnings to the community wallet
        Promise::new(env::signer_account_id())
            .transfer(artist.earnings)
            .then(ext_fund_community_wallet(
                amount_to_fund_community_wallet,
                self.community_wallet.clone(),
            ));

        artist.earnings = 0;
        self.artists.insert(&account_id, &artist);
    }

    pub fn check_and_reward_bonus(&mut self) {
        let account_id = env::signer_account_id();

        // Check if the artist is eligible for a bonus
        let is_eligible = is_bonus_eligible(self.artists.get(&account_id).unwrap());

        if is_eligible {
            let bonus_amount: Balance = 250_000_000;

            // Transfer bonus amount to the artist
            Promise::new(env::signer_account_id())
                .transfer(bonus_amount);

            // Update the artist's bonuses earned count
            let mut artist = self.artists.get_mut(&account_id).unwrap();
            artist.bonuses_earned += 1;
            self.artists.insert(&account_id, &artist);
        }
    }
}

fn ext_fund_community_wallet(amount: Balance, account_id: AccountId) {
    Promise::new(account_id).transfer(amount);
}
