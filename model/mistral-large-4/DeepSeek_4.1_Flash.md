# Mistral Large 4 — findings by DeepSeek 4.1 Flash

- Source: Mistral AI / Mistral Large 4 (`mistral-large-4`)
- Date: 2026-10-09 (UTC; re-verified 2026-10-18; **enriched 2026-11-10 — second pass, user-approved**)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Enrichment pass — 2026-11-10** (second pass, user-approved). New evidence since 2026-10-18: **Mistral shipped the open weights on 2026-10-29** ("Mistral Large 4 is now open weight") with a standing price change to **$0.70 in / $0.07 cached / $2.10 out per 1M** (supersedes the $0.68/$2.09 preview sale and the $1.36/$4.18 list price). Newly captured rows: Finch 73.3%, BrowseComp 84.5%, b3 Agent Security 97.1%, Cyber Misuse Refusal 96.6%, AA AutomationBench 57.8%, AA Terminal-Bench 4.0 24.7%, GDP.pdf 17.6%, AA-Briefcase 1348 Elo, cyber suite (AA Cyber Index 50.9 / CWE-Bench-AA 58.3 / DeepsecBench-AA 15.0 / CyberGym-E2E-AA 79.4), FrontierCode 2.0 19.7%, Design Arena 1256, STEMBench 2.50, AA-Omniscience 5.1 / 26.0% / 28.2%, and the November AA-index re-base (26.1 current-basket reading vs the 38 v4.x snapshot — index-version change, not model drift).
> **Adjusted dimension:** Cost efficiency **68 → 72** (open weights + standing $0.70/$2.10; still multiples of comparable-intelligence open models on cost-per-task). All other dimensions held; **Overall unchanged at 82**.
> Sources this pass: https://mistral.ai/news/mistral-large-4-oss/ · https://benchlm.ai/models/mistral-large-4

> **Re-verified 2026-10-18.** BenchLM (`mistral-large-4`, 20 rows) computes an overall **61.56/100 (#51 of 972)** and adds independent rows: AA-LCR **81.3%**, AA-HLE 35.0%, AA Intelligence Index 38.4%, Cybench 93%, Finance Agent v2 54.7%, **Vibe Code Bench 78.40%**, AA-SciCode 54.2%, AA-MMMU-Pro 76.4%, GDPval-AA 1422 / 46.1%, CritPt 10.6%. BenchLM lists **1M** context (AA still says 512K). **No score change** at that time (Tool 82 / Reasoning 78 / Context 92 / Multimodal 74 / Coding 82 / Cost 68 / Overall 82).

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship "Europe-trained" natively-multimodal MoE (also called ML4 / "le Chonk"), released 2026-10-06 as a Studio + API public preview; **open weights shipped 2026-10-29**. Positioned as the strongest open-weight model from outside the US and China, with standout cyber and coding-agent results.
- **Provider / access:** Mistral Studio + API (`mistral-large-4`; alias `mistral-large-4-0`), OpenCode Zen `opencode/mistral-large-4`; weights downloadable since 2026-10-29; OpenAI-compatible. Public preview (not GA); RL still in flight.
- **Release / knowledge:** 2026-10-06 (preview); open weights 2026-10-29; knowledge cutoff not published.
- **IDs:** `mistralai/mistral-large-4` (API `mistral-large-4`); `opencode/mistral-large-4`. No Zen Free ID.
- **Context window:** conflicting — Mistral docs / LLM Stats list **1,000,000 tokens**; Artificial Analysis reports **512k tokens**. Max output not published. Treated as ~512K–1M (see notes).
- **Modalities:** text + image in (API accepts up to 100 images/request, up from 8); text out. Natively multimodal with a 1.6B vision encoder; reasoning; tool calls.
- **Pricing (as of 2026-11-10):** **$0.70 in / $0.07 cached / $2.10 out per 1M** — standing rate since 2026-10-29 (supersedes the 2026-10-06 preview sale $0.68/$2.09 and the earlier $1.36/$4.18 list).
- **Architecture:** granular MoE — docs **1.05T total / 52B active / 1.6B vision** (announcement rounds to ~1T / 49B); trained from scratch on ~3,800 NVIDIA Grace Blackwell GPUs in EU data centers; **open weights since 2026-10-29** (licence: Mistral Ecosystem Open-Weight License per trackers).

### Raw benchmarks found

> Prefer Artificial Analysis (independent) rows over Mistral's self-reported announce prose/charts, flagged below.

Agent / tool use:

- AutomationBench: **59.9%** (self-reported); **AA AutomationBench 57.8%** (independent)
- AA-Briefcase: **1393 Elo** (self-reported) / **1348 Elo** (Artificial Analysis); Coding Agent Index 49.8
- CyberGym-E2E: **82%** (self-reported; independently confirmed by AA); Cybench 93% (40 CTF challenges); **b3 Agent Security 97.1%, Cyber Misuse Refusal 96.6%** (Oct-29 announcement)
- **Finch 73.3%; BrowseComp 84.5%** (Oct-29 announcement); **AA Cyber Index 50.9 / CWE-Bench-AA 58.3% / DeepsecBench-AA 15.0% / CyberGym-E2E-AA 79.4%** (AA)
- **AA Terminal-Bench 4.0 24.7%** (independent; vs 28.3% self-reported); GDPval-AA 1422 Elo / 46.1% (AA)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38** (v4.x snapshot, independent); **26.1 on the current November basket** (re-base — not comparable to 38); Mistral's own page claims 44
- SciCode-Verified: **91.8%** pass@1 (n=6, self-reported, open-weight SOTA claim); GDP.pdf 18.6% self-reported / 19% AA / **17.6% current AA reading**
- Finance Agent v2 54.7%; Harvey LAB 15.8%; Finch / FinWorkBench 67.4% (self-reported); **STEMBench 2.50**; **AA-Omniscience 5.1 index / 26.0% accuracy / 28.2% hallucination**
- ChartQA Pro 63.1%; Dense200 bbox 42.0% (vs GPT-6 Astra 41%)

Coding:

- DeepSWE 1.1: **61.7%** (self-reported); SWE-Atlas-QnA 59.4%; **Vibe Code Bench 78.40%** (Vals)
- Terminal-Bench 4.0: **28.3%** (self-reported; the quieter terminal row) / 24.7% (AA)
- **FrontierCode 2.0 19.7%** (Cognition); Coding Agent Index 49.8; AutomationBench 59.9

Long context:

- 512K–1M window; **no MRCR/RULER/GraphWalks published — no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 82/100.** AutomationBench 59.9% / 57.8% AA, AA-Briefcase 1348–1393 Elo, Finch 73.3, BrowseComp 84.5 and a cyber suite (b3 97.1, misuse refusal 96.6, CyberGym-E2E 79–82, Cyber Index 50.9) are strong for an open-weight model; capped by TB4.0-AA 24.7% and peer leads without published peer percentages staying uncredited.
- **Reasoning: 78/100.** SciCode-Verified 91.8% (self-reported) is excellent, but the independent AA Intelligence Index is 38 on the v4.x basket (26.1 on the November re-base), which caps the aggregate below frontier.
- **Context window: 92/100.** Docs list 1M tokens but Artificial Analysis measures 512K; scored near the 512K–1M band pending independent long-context retrieval numbers (none published).
- **Multimodal: 74/100.** Native text + image input with a 1.6B vision encoder, GDP.pdf ~18-19%, ChartQA Pro 63.1%, Design Arena 1256; no audio/video.
- **Coding: 82/100.** DeepSWE 61.7%, SWE-Atlas-QnA 59.4%, SciCode 91.8%, Vibe Code Bench 78.40% and Coding Agent Index 49.8 are strong for the open tier; Terminal-Bench 4.0 24.7–28.3% and FrontierCode 2.0 19.7% cap it.
- **Cost efficiency: 72/100.** Open weights (since 2026-10-29) plus the standing $0.70/$0.07/$2.10 rate make self-hosting/external hosting a real free lane and cut the hosted premium — but Artificial Analysis still measures multiples of the cost-per-task of similar-intelligence open models (e.g., GLM-5.3-Flash, DeepSeek V4.1 Flash), so it stays below the high-value band.
- **Overall Score: 82/100.** (82 + 78 + 92 + 74 + 82) / 5 = 81.6 → 82. Best fit: Europe-served, open-weight coding/agent and reduced-moderation cyber work with the option to self-host; not a verified closed-frontier replacement.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-10
- Method: enrichment second pass (user-approved) over public internet research — Mistral's 2026-10-29 open-weight announcement and pricing registry (via BenchLM), refreshed benchmark rows (Oct-29 announcement + Artificial Analysis), cross-checked against the 2026-10-18 evidence set (LLM Stats, Vals AI, Mistral announce/docs). Self-reported Mistral rows are labelled; the AA context-window conflict (512K vs 1M) and the index re-base are surfaced rather than resolved silently. Normalized 1–100 interpretations, not vendor scores.
- Reference URLs:
  - [Mistral AI — Mistral Large 4 is now open weight (2026-10-29)](https://mistral.ai/news/mistral-large-4-oss/)
  - [Mistral AI — Introducing Mistral Large 4 (2026-10-06)](https://mistral.ai/news/mistral-large-4/)
  - [BenchLM — Mistral Large 4 (pricing registry + rows)](https://benchlm.ai/models/mistral-large-4)
  - [Artificial Analysis — Mistral Large 4](https://artificialanalysis.ai/models/mistral-large-4)
  - [Vals AI — Finance Agent v2 / Vibe Code Bench](https://www.vals.ai/benchmarks/fabv2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
