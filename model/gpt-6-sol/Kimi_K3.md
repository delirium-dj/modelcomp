# GPT-6 Sol — findings by Kimi K3

- Source: OpenAI / GPT-6 Sol (`gpt-6-sol`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's mid/standard GPT-6 model (siblings Astra/Luna), launched Sep 22, 2026 "to power complex coding and agentic workflows," at 50% lower API prices than GPT-5.6 Sol (openai.com/index/introducing-gpt-6-sol-and-luna). BenchLM #4 of 507.
- **Provider / access:** OpenAI API (`gpt-6-sol`, Chat Completions + Responses; Batch); ChatGPT Work and Codex for Plus/Pro/Business/Enterprise/Edu (openai.com).
- **Release / knowledge:** Released 2026-09-22 (openai.com); knowledge cutoff April 20, 2026 (developers.openai.com).
- **IDs:** `openai/gpt-6-sol` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1,050,000 tokens (max input 922K) / 128K max output (developers.openai.com); >272K input priced higher.
- **Modalities:** text/image in; text out; reasoning (`none`–`max` effort); function calling, structured outputs, prompt caching, web/file search, computer use (developers.openai.com).
- **Pricing (as of 2026-09-29):** $2/M input, $10/M output, $0.2/M cached input, $2.5/M cache writes; prompts >272K input billed at 2x input/cache and 1.5x output for the full request; Batch/Flex 50%; EU data residency on Standard only (developers.openai.com).
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam (max): **56.4%**, above Claude Opus 5's best at ~60% lower cost/task (openai.com)
- AutomationBench (xhigh): **33.2%** at $0.27/task — beats Claude Opus 5 max (26.9%) at ~9% of its cost (openai.com); AA AutomationBench: **61.6%** (benchlm.ai)
- OSWorld 2.0 offline (xhigh): **60.5%** (openai.com)
- GDPval-AA v2.1: **1487 Elo** (Anthropic Sep 2026 Sonnet 5.5 comparison table); **49.3%** normalized (benchlm.ai)
- AA Briefcase: **1483 Elo** (Anthropic table, corroborated benchlm.ai); ExploitGym: **22.1%** (benchlm.ai)
- Terminal-Bench / Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- AA-HLE: **47.9%** (benchlm.ai)
- AA-LCR: **83.7%**; CritPt: **30.9%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **47.5**; BenchLM overall **81.28/100, #4 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **54.5% / 60.1%** (benchlm.ai)
- HealthBench Professional: **60.8%**; HealthBench Hard: **30.1%** (benchlm.ai)
- Internal factuality: ~half the mistakes of GPT-5.6 Sol, approaching Astra (openai.com)
- GPQA Diamond / ARC-AGI: no verified public score found

Coding:

- DeepSWE v1.1 (max): **68.8%**, within 1.1 pts of Claude Fable 5's best at ~80% lower cost/task (openai.com)
- FrontierCode 1.1: **~49–52%** band reported, "substantially above GPT-5.6 Sol" (chart, openai.com; exact figure not text-published)
- AA-SciCode: **57.6%** (benchlm.ai)
- SWE-bench Verified / LiveCodeBench / AA Coding Index: no verified public score found

Long context:

- AA-LCR 83.7% at the 1.05M window (benchlm.ai); no MRCR/RULER public score found for GPT-6 Sol; Codex note-keeping feature preserves earlier context windows searchable (openai.com).

Multimodal:

- AA-MMMU-Pro: **83.3%** (benchlm.ai); official docs confirm image input, text-only output (developers.openai.com)

### Normalized scores (1–100)

- **Tool use: 83/100.** OSWorld 60.5%, Agents' Last Exam 56.4%, AutomationBench 33.2% at class-leading cost, Briefcase 1483 Elo; capped by missing Terminal-Bench/Tau3 rows and GDPval 49.3%.
- **Reasoning: 84/100.** LCR 83.7%, CritPt 30.9%, HLE 47.9%, AA Index 47.5 — strong upper-mid reasoning; capped by missing GPQA/ARC rows.
- **Context window: 90/100.** Verified 1.05M window (922K max input, 128K output) with LCR 83.7%; capped by no GPT-6-specific MRCR/RULER probes.
- **Multimodal: 73/100.** Near top of the image-in/text-out band: MMMU-Pro 83.3%; no audio/video input and text-only output cap it.
- **Coding: 76/100.** DeepSWE 68.8% (max), FrontierCode ~49–52%, SciCode 57.6%; capped by thin coverage (no SWE-bench/LiveCodeBench public rows).
- **Cost efficiency: 75/100.** Verified $2/$10 per 1M (band ~70s) — half of GPT-5.6 Sol's promo price for a stronger model; 90% cache-read discount.
- **Overall Score: 81.2/100.** Mean of the five quality dims (83+84+90+73+76)/5 = 81.2. Best fit: GPT-6-generation agentic coding and professional work when Astra's maximum tier is unnecessary.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, developers.openai.com model pages, openai.com announcements, Anthropic comparison table); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: verified release 2026-09-22, pricing $2/$10 + >272K tier, 1.05M/922K/128K window, cutoff Apr 20 2026 via developers.openai.com; added official rows (Agents' Last Exam 56.4% max, AutomationBench 33.2% xhigh, OSWorld 60.5% xhigh, DeepSWE 68.8% max), GDPval-AA 1487 Elo (Anthropic); Context 88→90, Multimodal 80→73, Cost 68→75 per band rules; Overall 82→81.2.
- Future sources: add a new file next to this one using the same headings.
