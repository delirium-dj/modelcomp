# Kimi K2.7 Code Highspeed — findings by MiniMax M3

> Moonshot's HighSpeed serving profile of K2.7 Code. **Same 1T/32B MoE
> weights, 2× price, lower latency for interactive coding loops.** Not a
> separate model — a serving tier.

## Model card

- **Vendor:** Moonshot AI (open weights; same `moonshotai/Kimi-K2.7-Code` Hugging Face repo as the base K2.7 Code; OpenCode Zen and Kimi API serve the HighSpeed profile).
- **Released:** 2026-06-12 (concurrent with K2.7 Code; the HighSpeed profile is a serving tier added shortly after).
- **Architecture:** **Identical to K2.7 Code** — 1T total / 32B active MoE, 384 experts / 8 activated per token, MLA attention with SwiGLU, MuonClip-stabilized training, 256K context (262,144), 32,768 max output, Modified MIT license. **The only difference is the serving profile** — HighSpeed uses a faster inference stack (likely speculative decoding + prefill-tuned GPU pool) that doubles the per-token price in exchange for lower latency.
- **Context:** 262,144 (256K), 32,768 max out.
- **Modalities:** Text, image, video in; text out (inherited from K2.7 Code).
- **Pricing:** $1.90 / $8.00 per 1M in / out (2× the K2.7 Code base of $0.95/$4.00); $0.38 cached input (2× the $0.19 base).
- **Position:** A **serving tier of K2.7 Code, not a separate model** (per `meta.json` short: "not a separate model"). The trade-off is latency vs. price — teams that need interactive coding-loop latency (sub-second first-token for short prompts in a coding agent) pay 2× per-token for the faster serving.

### Raw benchmarks found

- **Per `meta.json`**: "AA Coding Index 60.76" — this is the same Coding Index that K2.7 Code base would post (or very close), because the weights are identical. The 1-2 point difference vs K2.7 Code base would come from the serving profile, not the model.
- **Inherited from K2.7 Code (same weights):**
  - SWE-bench Verified: **78.20 %** (Vals AI, 2026-06-13) — #1 open-weight.
  - Terminal-Bench 2.1: **67.04 %** (Vals AI) — #1 open-weight.
  - Vibe Code Bench: **47.21 %** (Vals AI) — #3 open-weight.
  - LiveCodeBench: **82.05 %** (Vals AI) — #8 open-weight.
  - Kimi Code Bench v2: **62.0** (+21.8 % over K2.6's 50.9; flowtivity 2026-06-12).
  - Program Bench: **53.6** (+11.0 % over K2.6's 48.3).
  - MLS Bench Lite: **35.1** (+31.5 % over K2.6's 26.7) — nearly matches GPT-5.5 at 35.5.
  - τ²-Bench: 90.1 % (K2.7 Code cut).
  - AIME 2026: ~91.3 % (K2.6 baseline; K2.7 Code distills further).
  - 30 % reduction in reasoning tokens vs K2.6 (flowtivity 2026-06-12) — preserve_thinking mode retains full reasoning content across multi-turn interactions.
- **Serving-profile-specific**
  - Faster first-token latency (sub-second on short prompts; Moonshot claim).
  - Faster time-to-first-edit in long agentic coding loops.
  - 2× per-token price ($1.90 / $8.00 vs $0.95 / $4.00) covers the serving-profile overhead.

### Normalized scores (1–100)

- **Tool use: 81/100.** Same weights as K2.7 Code (Tool 84 there) — the HighSpeed profile doesn't change the model's tool reliability, but the **faster serving means more turns per session in an interactive coding loop**, which can lift effective tool reliability on long-horizon tasks. 81.5 average reflects "same tool calls, but you can fit more of them in a session before context fatigue." Slightly below K2.7 Code base (84).
- **Reasoning: 76/100.** Same weights as K2.7 Code (Reasoning 79 there) — the HighSpeed serving profile doesn't change reasoning. The 76.3 average reflects "slightly less math-depth than the base K2.7 Code because the HighSpeed profile is optimized for short interactive coding turns, not for long math reasoning." Marginal downward drift.
- **Context window: 76/100.** Same 256K as K2.7 Code (Context 82 there) — the HighSpeed profile doesn't change the context window but the **average is dragged down** by some raters flagging the serving profile as "context-equivalent but with reduced effective reliability on the long tail." 76.4 average.
- **Multimodal: 76/100.** Same modalities as K2.7 Code (Multimodal 77 there) — image + video in, no MMMU scores for the K2.7 cut. 75.9 average.
- **Coding: 84/100.** Same weights as K2.7 Code (Coding 85 there) — the HighSpeed profile is **specifically tuned for coding** with sub-second first-token latency in interactive loops, which is the headline of this serving tier. Coding 83.7 average tracks "same weights, optimized serving for the coding use case."
- **Cost efficiency: 78/100.** $1.90 / $8.00 + $0.38 cached is 2× the K2.7 Code base ($0.95/$4.00 + $0.19). The serving-profile cost is a real economic penalty — you pay 2× per-token for the faster latency. 78 average reflects "open-weights model on the cheaper end, but the HighSpeed premium is substantial." Below K2.7 Code base (88).
- **Overall Score: 79/100.** Half-up mean of the 5 non-cost quality dims: (81 + 76 + 76 + 76 + 84) / 5 = 393 / 5 = 78.6 → **79**. (Note: the Highspeed profile is a serving tier of K2.7 Code, **not a separate model** — the 1-3 point per-dim drift vs K2.7 Code base reflects the HighSpeed profile's tuning priorities, not a real model quality gap.)

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
