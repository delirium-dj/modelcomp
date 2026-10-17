# GPT-5.5 — findings by MiniMax M3

- Source: OpenAI (`openai/gpt-5.5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's first fully retrained base model since GPT-4.5 (codename "Spud"); released April 23, 2026. Natively omnimodal (text, image, audio, video) in a unified architecture. Co-designed with NVIDIA GB200/GB300 NVL72 rack-scale systems; achieved per-token latency parity with the smaller GPT-5.4.
- **Provider / access:** OpenAI API (`gpt-5.5`); ChatGPT (Plus/Pro/Business/Enterprise/Edu/Go); Codex (400K context); Microsoft Foundry; OpenCode Zen `opencode/gpt-5.5`. Responses API + Chat Completions.
- **Release / knowledge:** Released 2026-04-23. Co-designed with NVIDIA GB200/GB300.
- **IDs:** `openai/gpt-5.5`; `opencode/gpt-5.5` (Zen). No free ID.
- **Context window:** 1M tokens (400K in Codex).
- **Modalities:** Text, image, audio, video in; text out (natively omnimodal — first OpenAI model with all four modalities in a single unified architecture). Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-10-13):** $5 input / $30 output per 1M (doubled from GPT-5.4's $2.50/$15). Cached input: ~$0.50 (10% of base). GPT-5.5 Pro variant: $30 / $180.
- **Architecture:** Proprietary OpenAI. Fully retrained base (first since GPT-4.5). Hardware co-design with NVIDIA GB200/GB300 NVL72.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI launch; Vellum; Portkey) — leads Claude Opus 4.7 (69.4%) by 13+ points and Gemini 3.1 Pro (68.5%) by 14+ points.
- SWE-Bench Pro (Public, single attempt): **58.6%** (OpenAI; Vellum) — trails Claude Opus 4.7 (64.3%); OpenAI system card notes "evidence of memorization" from other labs.
- SWE-bench Verified: **88.7%** (Onyx; multiple aggregators).
- Expert-SWE (OpenAI internal, 20h median human-completion tasks): **73.1%** (Vellum) — vs GPT-5.4's 68.5%.
- GDPval: **84.9%** (OpenAI / Vellum) — leads Claude Opus 4.7 (80.3%) and Gemini 3.1 Pro (67.3%). GPT-5.5 Pro = 82.3% (narrower than base).
- OSWorld-Verified: **78.7%** (OpenAI / Vellum) — edges Claude Opus 4.7 (78.0%) and Gemini 3.1 Pro (no reported).
- BrowseComp: **84.4%** (OpenAI); Pro variant **90.1%**.
- MCP Atlas: **75.3%** (Vellum) — trails Claude Opus 4.7 (79.1%) and Gemini 3.1 Pro (78.2%).
- Tau2-bench Telecom (no reasoning): **98.0%** without prompt tuning (Vellum).
- Claw-Eval / SWE Atlas Codebase QnA / Tau3-Banking: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI; Vellum) — trails Claude Opus 4.7 (94.2%) and Gemini 3.1 Pro (94.3%) by ~0.7.
- ARC-AGI-2 (Verified): **85.0%** (Vellum) — leads Claude Opus 4.7 (75.8%), Gemini 3.1 Pro (77.1%), and the GPT-5.4 base (73.3%) by 11.7.
- HLE (no tools): **41.4%** (Vellum) — trails Claude Opus 4.7 (46.9%) and Gemini 3.1 Pro (44.4%).
- FrontierMath Tiers 1-3: **51.7%** (Vellum) — leads Claude Opus 4.7 (43.8%) and Gemini 3.1 Pro (36.9%). T4: 35.4% (Pro variant 39.6%).
- CyberGym: **81.8%** (Vellum / OpenAI) — leads Claude Opus 4.7 (73.1%) by ~9.
- AA Intelligence Index / LCR / MLCR / CritPt: **no verified public score found** for GPT-5.5 specifically.

Coding:

- SWE-bench Pro 58.6%, SWE-bench Verified 88.7%, Expert-SWE 73.1%, Terminal-Bench 2.0 82.7%, LiveCodeBench 78%, HumanEval 94.2% (per Onyx summary).
- AA Coding Index: GPT-5.5 holds "state-of-the-art intelligence" on the AA Coding Index per OpenAI claim.

Multimodal / long context:

- MRCR v2 (512K-1M tokens): **74.0%** (Vellum / OpenAI) — vs GPT-5.4's 36.6%, Claude Opus 4.7's 32.2% — a 37-point gain and the most underreported improvement of the launch.
- MRCR v2 (128K-256K): **87.5%** (Vellum) — vs Claude Opus 4.7's 59.2%.
- Native text + image + audio + video (first OpenAI omnimodal base).
- MMMU Pro: not separately published for GPT-5.5 in the Vellum benchmark breakdown.
- Blueprint-Bench 2 / CharXiv Reasoning: no verified direct number for GPT-5.5.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.0 82.7% (LEAD, +13 over Opus 4.7). MCP Atlas 75.3%. OSWorld-Verified 78.7%. Tau2-bench Telecom 98.0%. BrowseComp 84.4%. Capped at 88 because SWE-Bench Pro trails Opus 4.7 by 5.7 points.
- **Reasoning: 88/100.** ARC-AGI-2 85.0% (LEAD cohort). GPQA Diamond 93.6%. FrontierMath T1-3 51.7% (LEAD). FrontierMath T4 35.4% (LEAD). CyberGym 81.8%. Capped at 88 because HLE (no tools) trails Claude Opus 4.7 (41.4 vs 46.9), and AA Intelligence Index for this exact model/ID is not separately published.
- **Context window: 95/100.** 1M context with MRCR v2 512K-1M = 74.0% (LEAD, +37 over Opus 4.7). MRCR v2 128K-256K = 87.5%. Capped at 95 because the API context is 1M but Codex is gated at 400K, and the published numbers don't extend to mid-range (256K-512K).
- **Multimodal: 90/100.** Natively omnimodal (text + image + audio + video in single architecture). First OpenAI base with full omnimodal coverage. Capped at 90 because MMMU-Pro / CharXiv / Blueprint-Bench specific numbers for GPT-5.5 are not separately published.
- **Coding: 88/100.** Terminal-Bench 2.0 82.7% (LEAD). SWE-bench Verified 88.7%. SWE-Bench Pro 58.6% (trails Opus 4.7 64.3). LiveCodeBench 78%. Expert-SWE 73.1%. Capped at 88 because SWE-Bench Pro trails the Anthropic cohort.
- **Cost efficiency: 65/100.** $5 in / $30 out (2× GPT-5.4 base, parity with Opus 4.7's $5/$25). OpenAI claims 40% fewer output tokens for Codex tasks, netting ~20% effective cost increase. Capped at 65 because output is $30/MTok (premium tier).
- **Overall Score: 90/100** Half-up mean of Tool 88, Reasoning 88, Context 95, Multimodal 90, Coding 88 = 449/5 = 89.8 → half-up 90. GPT-5.5 is OpenAI's first fully retrained omnimodal base since GPT-4.5: Terminal-Bench 2.0 leader (+13 over Opus 4.7), ARC-AGI-2 leader (85.0), MRCR v2 at 1M = 74.0 (37-point lead over Opus 4.7), and native audio/video input. The 2× per-token increase over GPT-5.4 is partially offset by 40% token efficiency; SWE-Bench Pro at 58.6% is the soft spot.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: public internet research (OpenAI GPT-5.5 launch, OpenAI GPT-5.5 System Card via Vellum, Portkey GPT-5.4 vs Opus 4.6 comparison, Onyx LLM coding benchmark summary, OpenRouter compare page, NVIDIA early-access coverage). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.5_OpenAI.md`, using the same headings.
