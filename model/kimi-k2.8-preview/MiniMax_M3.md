# Kimi K2.8 Preview — findings by MiniMax M3

> Moonshot AI's September 2026 K3 lightweight stand-in. 1M context, served
> at the `kimi-for-coding` model ID, "performance close to K3" per Moonshot.
> **No public benchmarks as of 2026-10-17.**

## Model card

- **Vendor:** Moonshot AI (closed weights, Kimi-membership-only access; `kimi-for-coding (K2.8 Preview)` model ID).
- **Released:** 2026-09-11 (Kimi Code "What's New" changelog, HokAI, aimodeling 2026-09-16, kie.ai 2026-09-11).
- **Architecture:** **Undisclosed.** No model card, no parameter count, no architecture description. Most likely shares the Kimi K2.7 Code Mixture-of-Experts design (1T total / 32B active per token, MLA, MuonClip-stabilized training) — an inference from the shared endpoint, not a confirmed spec (per HokAI). 256K → 1M context is the visible jump from K2.7 Code.
- **Context:** 1,048,576 (1M).
- **Modalities:** Text, image, video in; text out. OpenAI- and Anthropic-compatible API endpoints.
- **Pricing:** **Kimi membership, not per-token billing.** Plus and above on the new plans, Andante and above on legacy plans. After quota runs out, "Extra Usage" balance billed in RMB. `noFreeId: true`.
- **Position:** K3 lightweight stand-in. Sits below the K3 flagship (2.8T params, 2026-07-16) and above the K2.7 Code base. Drop-in replacement at the `kimi-for-coding` model ID — clients and third-party tools needed no config change to receive it. Replaces K2.7 Code on the same route.

### Raw benchmarks found

- **Moonshot's only public statement (vendor, qualitative):** "performance close to K3, with coding and agent capabilities improved across the board and significantly more efficient thinking than K2.7 Code" (HokAI 2026-10-10).
- **Reasoning control:** 3 levels — low, high, max — with **max as the default for K2.8 Preview** (K3 defaults to high). Requests sent with thinking turned off are answered by K2.8 Preview in no-thinking mode, so K2.8 also serves as the **fast path behind the flagship**.
- **No SWE-bench / GPQA / AIME / TB / HLE numbers published** by Moonshot or any independent evaluator as of 2026-10-17. No Artificial Analysis page exists. HokAI's anchor is explicit: "Treat any K2.8 score you see quoted elsewhere as unverified until Moonshot or an independent evaluator publishes one with a method."
- **Adjacent numbers (do not carry over to K2.8):**
  - K3 (2026-07-16): 93.5 % on GPQA Diamond (K3 tech blog, 2026-07-16).
  - K2.7 Code (2026-06-12): SWE-bench Verified 78.20 % (Vals AI), Kimi Code Bench v2 62.0, Program Bench 53.6, MLS Bench Lite 35.1 (flowtivity 2026-06-12).
- **Open weights:** **No.** K2.7 Code shipped under Modified MIT; K2.8 Preview has no public weights or license. Closed weights, Kimi-membership only.
- **API compatibility:** OpenAI- and Anthropic-compatible base URLs (Kimi Code Console). Third-party agents (Claude Code, Cursor, Cline) can call the model directly via Kimi Code API key against the same membership quota.

### Normalized scores (1–100)

- **Tool use: 75/100.** Drop-in at the `kimi-for-coding` model ID means the tool-reliability baseline is K2.7 Code's (which averages 84) — but the K2.8 cut is a preview, and the tool-stack is a work in progress until Moonshot or an independent evaluator publishes a number. 75.2 average reflects "K2.7 Code reliability minus the preview-tax." Below K2.7 Code (84) and well below K3 (88+).
- **Reasoning: 75/100.** "Close to K3" per Moonshot with "significantly more efficient thinking than K2.7 Code" — the efficiency story is the headline, not the absolute reasoning ceiling. Without a published GPQA / AIME / HLE number, the 74.6 average reflects "preview-tier reasoning at best." Below K2.7 Code (79) and well below K3 (95+ on math stacks per K3 tech blog).
- **Context window: 92/100.** 1M context is the visible jump from K2.7 Code's 256K. Matches K3's 1M, GPT-6 family 1M, GLM 5.3 1M, and other 2026 frontier tiers. 92 average reflects "top-tier context, with one caveat: no LongBench-V2 / MRCR-v2 number for the K2.8 cut."
- **Multimodal: 74/100.** Text + image + video in. The K2.7 Code base scores 77, the K3 flagship is multimodal-native, so 73.5 average tracks "preview-tier multimodal with no published MMMU-Pro / MMMU numbers for the K2.8 cut."
- **Coding: 78/100.** Drop-in at the `kimi-for-coding` model ID replaces K2.7 Code, which posted SWE-bench Verified 78.20 % (Vals AI), Kimi Code Bench v2 62.0, Program Bench 53.6, MLS Bench Lite 35.1. Moonshot says "coding capabilities improved across the board" with "more efficient thinking" — but no published K2.8 number exists. 78.4 average reflects "preview tier, likely K2.7 Code + efficiency gain."
- **Cost efficiency: 81/100.** **Kimi membership, not per-token billing.** The economic model is a flat-rate quota, not a token-metered API. The 81.1 average reflects "fixed-fee cost is competitive for heavy users, but the lack of per-token pricing and the lack of a published efficiency-per-quota number makes the cost hard to compare head-to-head against K2.7 Code ($0.95/$4.00) or K3 (per-token on Open Platform)."
- **Overall Score: 79/100.** Half-up mean of the 5 non-cost quality dims: (75 + 75 + 92 + 74 + 78) / 5 = 394 / 5 = 78.8 → **79**. (Note: per `meta.json`, "proprietary, no independent benchmarks yet" — my anchor is Moonshot's "close to K3" claim, K2.7 Code baseline scores, and the 12-rater average.md. Treat any K2.8 number from non-Moonshot sources as unverified until Moonshot or an independent evaluator publishes with method.)

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
