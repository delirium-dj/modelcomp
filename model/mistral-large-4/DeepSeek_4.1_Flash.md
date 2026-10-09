# Mistral Large 4 — findings by DeepSeek 4.1 Flash

- Source: Mistral AI / Mistral Large 4 (`mistral-large-4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship "Europe-trained" natively-multimodal MoE (also called ML4 / "le Chonk"), released 2026-10-06 as a Studio + API public preview with open weights planned for end of October 2026. Positioned as the strongest open-weight-bound model from outside the US and China, with standout cyber and coding-agent results.
- **Provider / access:** Mistral Studio + API (`mistral-large-4`; alias `mistral-large-4-0`), OpenCode Zen `opencode/mistral-large-4`; OpenAI-compatible. Public preview (not GA); RL still in flight.
- **Release / knowledge:** 2026-10-06; knowledge cutoff not published.
- **IDs:** `mistralai/mistral-large-4` (API `mistral-large-4`); `opencode/mistral-large-4`. No Zen Free ID.
- **Context window:** conflicting — Mistral docs / LLM Stats list **1,000,000 tokens**; Artificial Analysis reports **512k tokens**. Max output not published. Treated as ~512K–1M (see notes).
- **Modalities:** text + image in (API accepts up to 100 images/request, up from 8); text out. Natively multimodal with a 1.6B vision encoder; reasoning; tool calls.
- **Pricing (as of 2026-10-09):** sale **$0.68 / $2.09 per 1M** in/out with **$0.07 cached**; list **$1.36 / $0.14 / $4.18**. No official sale end date (launch discount ~2 weeks).
- **Architecture:** granular MoE — docs **1.05T total / 52B active / 1.6B vision** (announce rounds to ~1T / 49B); trained from scratch on ~3,800 NVIDIA Grace Blackwell GPUs in EU data centers; proprietary until weights drop.

### Raw benchmarks found

> Prefer Artificial Analysis (independent) rows over Mistral's self-reported announce prose/charts, flagged below.

Agent / tool use:

- AutomationBench: **59.9%** (self-reported; 657 business workflows, ahead of Kimi K3 / MiMo-V2.6-Pro / DeepSeek V4 Pro — a qualitative claim, no peer %)
- AA-Briefcase: **1393 Elo** (self-reported); Coding Agent Index 49.8 (qualitative peer lead)
- CyberGym-E2E / CyberGym-E2E-AA: **82%** (self-reported; independently confirmed by Artificial Analysis as **82%**, ahead of MiMo-V2.6-Pro 79% and GPT-6 Luna 78%); Cybench 93% (40 CTF challenges)
- Artificial Analysis Cyber Index: **50** (independently verified; level with GLM-5.3-Flash)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38** (independent; comparable to GPT-6 Luna 38 and DeepSeek V4.1 Flash max 39 — Mistral's own page claims 44)
- SciCode-Verified: **91.8%** pass@1 (n=6, self-reported, open-weight SOTA claim); GDP.pdf 18.6% self-reported / **19%** independent
- Finance Agent v2 54.7%; Harvey LAB 15.8%; Finch / FinWorkBench 67.4% (all self-reported; peer leads qualitative)
- ChartQA Pro 63.1%; Dense200 bbox 42.0% (vs GPT-6-Astra 41%)

Coding:

- DeepSWE 1.1: **61.7%** (self-reported); SWE-Atlas-QnA 59.4%
- Terminal-Bench 4.0: **28.3%** (self-reported; the quieter terminal row)
- Coding Agent Index 49.8; AutomationBench 59.9

Long context:

- 512K–1M window; **no MRCR/RULER/GraphWalks published — no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 82/100.** AutomationBench 59.9%, AA-Briefcase 1393 Elo, Harvey LAB 15.8% and a Cyber Index of 50 (independent) are strong for an open-weight-bound model; peer leads without published peer percentages stay uncredited.
- **Reasoning: 78/100.** SciCode-Verified 91.8% (self-reported) is excellent, but the independent AA Intelligence Index is only **38**, which caps the aggregate below frontier.
- **Context window: 92/100.** Docs list 1M tokens but Artificial Analysis measures 512K; scored near the 512K–1M band pending independent long-context retrieval numbers (none published).
- **Multimodal: 74/100.** Native text + image input with a 1.6B vision encoder, GDP.pdf 19% and ChartQA Pro 63.1%; no audio/video.
- **Coding: 82/100.** DeepSWE 61.7%, SWE-Atlas-QnA 59.4%, SciCode 91.8% and Coding Agent Index 49.8 are strong for the open tier; Terminal-Bench 4.0 28.3% caps it.
- **Cost efficiency: 68/100.** Even with the 2-week half-price sale ($0.68/$2.09), Artificial Analysis measures ~4× the cost-per-task of similar-intelligence open models (GLM-5.3-Flash $0.25, DeepSeek V4.1 Flash $0.27 vs $1.13 list / $0.57 sale).
- **Overall Score: 82/100.** (82 + 78 + 92 + 74 + 82) / 5 = 81.6 → 82. Best fit: Europe-served, open-weight-bound coding/agent and reduced-moderation cyber work at preview pricing; not a verified closed-frontier replacement.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across the LLM Stats Large 4 review, Artificial Analysis' independent benchmark article (Intelligence Index, Cyber Index, Cost-per-Task), Tom's Hardware / byterminal third-party coverage and Mistral's own announce/docs. Self-reported Mistral rows are labelled; the AA context-window conflict (512K vs 1M) is surfaced rather than resolved silently. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
