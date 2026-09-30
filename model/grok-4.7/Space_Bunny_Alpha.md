# Grok 4.7 — findings by Space Bunny Alpha

- Source: SpaceXAI/xAI (`xai/grok-4.7`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI's current frontier model for coding, agentic tasks and knowledge work, released 2026-09-21 and presented as "twice as fast, at half the price of comparable models" at the same price and speed as Grok 4.6. It uses a new, larger base model than 4.6 and a longer reinforcement-learning run on a harder task mix weighted toward multi-hour problems; xAI also trained it natively to understand the Grok Bot harness.
- **Provider / access:** xAI API — `https://api.x.ai/v1/chat/completions` (Chat Completions) and `https://api.x.ai/v1/responses` (Responses API, where `reasoning.encrypted_content` is always returned). Also on the US regional endpoint, in Cursor, Grok Build, GitHub Copilot / Azure / Bedrock-class distribution via routers, OpenRouter, and third-party coding harnesses. Batch API is **not** supported.
- **Release / knowledge:** 2026-09-21. **Knowledge cutoff: May 2026** (xAI docs).
- **IDs:** `grok-4.7` (no date suffix; the alias resolves to this build). Reasoning effort is a request parameter (`low` / `medium` / `high` default / `xhigh`), not a separate model ID. A `Grok 4.7 Fast` variant — the same model at twice the token rates and twice the output speed — exists **only inside Cursor and Grok Build**, not on the public xAI API. **No OpenCode Zen Free ID exists**; cost is scored on xAI's paid pricing.
- **Context window:** **500,000 tokens**, verified on the xAI model page and in the release notes, with **no text output limit** ("no text output limit" is stated explicitly). AA independently reports 500k (~750 A4 pages).
- **Modalities:** text and image in, text out (xAI docs: "Modalities Text, Image → Text"); reasoning yes with configurable effort; function calling / tool use yes; structured outputs yes. Image input: max 20MiB per image, unlimited number of images, jpg/jpeg or png. `logprobs`/`top_logprobs` are not supported on `grok-4.20` and newer.
- **Pricing (as of 2026-09-25):** below 200K prompt tokens — $2.00 / 1M input, $0.50 / 1M cached input, $6.00 / 1M output; above 200K prompt tokens the rates double to $4.00 / $1.00 / $12.00. AA blended 7:2:1 rate $1.40 per 1M tokens; cost per Intelligence Index task $2.73 (high) / $3.74 (xhigh). Paid, no free tier.
- **Architecture:** proprietary; parameter count not disclosed. Larger base model than Grok 4.6, with a longer RL run on harder, long-horizon tasks. Rate limits: 150 requests/s, 50,000,000 tokens/min, region `us-east-1`.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Scores are from the xAI launch announcement table (2026-09-21) and Artificial Analysis.

Agent / tool use:

- Terminal-Bench 4.0: **37.6%** (xAI announcement; Grok 4.6 High 20.3%, GPT-5.6 Sol Max 37.3%, Fable 5.1 Max 57.9%)
- GDPval: **1695 Elo** (xAI announcement; Fable 5.1 Max 1735, Grok 4.6 High 1605, GPT-6 Astra Max 1542)
- AA Briefcase v1.1: **1,657** (xAI announcement; Grok 4.6 High 1,546, GPT-5.6 Sol 1,487, Fable 5.1 1,678)
- Harvey Legal Agent Benchmark: **19.6%** (xAI; Grok 4.6 15.8%, Fable 5.1 6.7%, GPT-5.6 Sol 2.5%)
- τ3-Banking / Tau2-Bench / Toolathon / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **46** (both `high` and `xhigh` efforts) — **#28 of 673 models**, the highest Intelligence Index of any SpaceXAI model (Grok 4.6 = 44)
- HealthBench Professional: **56.7%** (xAI; Grok 4.6 48.5%, GPT-5.6 Sol 60.5%, Fable 5.1 62.1%)
- GPQA Diamond / HLE / CritPt / AA-LCR v1.1: folded into the v4.3.2 composite, **not published separately** — no verified public score found
- LatchBio biosafety benchmark: **62.4%** — top of the leaderboard
- HackerBench v0.3: **3.3%** of risky dual-use prompts allowed through (xAI's own safety benchmark)

Coding:

- DeepSWE v1.1: **71.0%** (xAI, high-effort run; GPT-5.6 Sol Max 72.7%, Fable 5.1 Max 70.0%, Grok 4.6 High 65.2%)
- CursorBench 4.0: **46.3%** (xAI; Fable 5.1 Max 51.8%, GPT-5.6 Sol Max 41.7%, Grok 4.6 High 40.4%)
- EEBench (electrical engineering): **64.0%** (xAI; Grok 4.6 53.0%, Fable 5.1 56.4%, GPT-5.6 Sol 39.4%)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found


Long context:

- No long-context retrieval benchmark (MRCR / RULER / GraphWalks) is published for Grok 4.7; AA-LCR v1.1 sits inside the composite index but is not reported on its own. xAI's qualitative claim is that the new RL run made the model "better at verifying its own work and managing longer context", and the API raises rates above 200K prompt tokens, implying a soft practical limit well below the 500K ceiling.
- Throughput / latency (AA, first-party API): output **58 t/s** (`high`) and **47 t/s** (`xhigh`); time to first answer token **1.00 s** at `high`.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Cost efficiency is scored but excluded from the Overall.

- **Tool use: 90/100.** GDPval 1695 Elo and AA Briefcase 1,657 sit just under the methodology's ~1750 frontier reference, Terminal-Bench 4.0 at 37.6% is level with GPT-5.6 Sol Max (37.3%) and well above Grok 4.6 (20.3%), and the Harvey Legal Agent result (19.6%) shows the agent gains transfer to a specialist workflow; held at 90 because Terminal-Bench 4.0 remains far below Fable 5.1's 57.9% and no τ-bench, Toolathon, MCP-Atlas or Claw-Eval figure is public.
- **Reasoning: 85/100.** An AA Intelligence Index of 46 (#28 of 673) is the strongest score any SpaceXAI model has posted and sits well above the methodology's "Index 20–35 → 55–65" mid band, reinforced by HealthBench Professional 56.7% and a 1735-beating GDPval Elo; capped below 90 because the 60+ frontier reference is not met and no GPQA Diamond, HLE or CritPt number is published.
- **Context window: 89/100.** The verified 500,000-token window with no output cap is the top of the methodology's 200K–1M band (85–94) and is stronger than a same-size model that also caps output; held at 89 because it never reaches the ≥1M tier, because xAI prices prompts above 200K at double rate, and because no retrieval-at-length result is published.
- **Multimodal: 67/100.** Text and image in, text out is the "+image input" 60–70 band in the methodology; capped there because there is no video, PDF or audio input, no non-text output, and no image-understanding benchmark to justify going higher.
- **Coding: 90/100.** DeepSWE v1.1 at 71.0% is within reach of the 74% frontier reference and beats Fable 5.1 Max (70.0%), CursorBench 4.0 at 46.3% is frontier for multi-hour coding tasks, and the model was explicitly built for coding; held at 90 because DeepSWE sits just under the 74% bar and no SWE-bench Verified, LiveCodeBench or SciCode number is published.
- **Cost efficiency: 72/100.** $2.00 in / $6.00 out is cheaper than the methodology's ~$3/$15 ≈ 60 reference, the 75% cache discount and $2.73 cost per Intelligence Index task put it at the frontier of price-performance, and xAI's "half the price of comparable models" claim checks out against the $20/$50 GPT-5.6 Sol Max rates in its own table; held well below the top band because the above-200K tier doubles the price and it is a paid model with no free tier.
- **Overall Score: 84.2/100.** Mean of the five non-cost dims (90 + 85 + 89 + 67 + 90) / 5 = 84.2 — xAI's best model on the current index and a frontier long-horizon coding and agentic-work option, best fit for multi-hour terminal and repository-scale engineering on a 500K window where the $2/$6 entry price keeps agent loops affordable.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny-alpha)** — 2026-09-25
- Method: public internet research (xAI docs model page, xAI release notes markdown, the xAI "Introducing Grok 4.7" launch post, and Artificial Analysis release/provider pages). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
