# Inkling — findings by Pixel Canary

- Source: Thinking Machines Lab (`opencode/Inkling`, reseller IDs `thinkingmachines/inkling`, `Inkling-Small`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling — Thinking Machines Lab's open-weight hybrid-reasoning flagship (no OpenCode Zen Free ID).
- **Short description:** A 1M-context, hybrid (thinking / non-thinking) open-weight model from Thinking Machines Lab, offered in a full Inkling and a smaller Inkling-Small variant; strong single-shot reasoning and mid-tier agentic coding, weak on long-horizon autonomy.
- **Provider / access:** DeepInfra (`deepinfra/thinkingmachines/Inkling`), Baseten (`thinkingmachines/inkling-small`), nano-gpt (`thinkingmachines/inkling`, `inkling:thinking`, `Inkling-Small`), plus OpenCode; OpenAI-compatible API with tool calling, function calling and structured output.
- **Release / knowledge:** 2026-07-15 for Inkling, 2026-07-30 for Inkling-Small (models.dev `release_date`); BenchLM profile refreshed 2026-09-28. Knowledge cutoff not published.
- **IDs:** `opencode/Inkling` (folder uses the vendor's exact-case name); weights are public, so self-hosting is the primary deployment path.
- **Context window:** BenchLM lists 1M; DeepInfra exposes 524,288 input with an unusually large 1,048,576 output ceiling, nano-gpt 1,048,000 input / 32,768 output.
- **Modalities:** Text + image in; text out (Open Weight, Hybrid reasoning type).
- **Pricing (as of 2026-09-29):** Inkling $0.95 / 1M in, $4.05 / 1M out, $0.16 cached reads (DeepInfra) or $1.00 / $4.05 / $0.17 (nano-gpt); Inkling-Small $0.50 / $1.20 with $0.10 cache reads.
- **Architecture:** Open weights published by Thinking Machines Lab; hybrid reasoner with switchable thinking modes. Full parameter count of the hosted "Inkling" not disclosed by the vendor in the listings checked.

### Raw benchmarks found

BenchLM profile `inkling` (updated 2026-09-28; 46 of 486 benchmarks covered, coverage-flagged composite **54.24/100, rank #67 / 512**):

- Coding: SWE-bench Verified **77.6%**; SWE-bench Pro **54.3%**; LiveCodeBench (Vals) **85.5%**; AA-SciCode **47.0%**; FrontierSWE v2 **4.1%**; AA Coding Index **52.1%**
- Agentic / tool use: Terminal-Bench 2.1 **63.8%** (Vals 47.6%); BrowseComp **77.1%**; GDPval-AA **Elo 1064 / 28.2%**; AA Briefcase **834**; AA Tau3-Banking **31.1%**; AA AutomationBench **5.0%**; AA Terminal-Bench 4.0 **1.0%**; AA Agentic Index **24.3%**; Design Arena Agentic Web Dev **1257**
- Reasoning / knowledge: GPQA Diamond **87.9%** (Vals 87.1%); HLE **46%** (no-tools 30%); AA Intelligence Index **25.0**; IFBench **79.8**; AA-Omniscience accuracy **41.6%** with hallucination rate **67.7%** (index 2.0)
- Long context: AA-LCR **77.3%**
- Multimodal: MMMU-Pro **73.5%** (AA 73.5%); CharXiv **82%** (78.1% without tools); Design Arena Website **1229**; GDP.pdf **12.8%**
- Terminal-Bench 2.0 / 3.0, MRCRv2 / RULER / GraphWalks, video and audio suites: no verified public score found for this exact ID

### Normalized scores (1–100)

- **Tool use: 48/100.** Terminal-Bench 2.1 63.8% and BrowseComp 77.1% show usable tool loops, but the independent agentic suites are near the floor — AA AutomationBench 5.0%, AA Terminal-Bench 4.0 1.0%, AA Agentic Index 24.3, GDPval Elo 1064 — so it cannot be trusted with long-horizon autonomy.
- **Reasoning: 55/100.** GPQA Diamond 87.9% and HLE 46% are respectable, yet AA Intelligence Index 25.0 and a 67.7% hallucination rate against 41.6% accuracy (Omniscience index 2.0) cap it firmly in mid-tier.
- **Context window: 78/100.** 1M-class window (524K–1.05M depending on host) with AA-LCR 77.3%; capped because output ceilings are host-dependent (32K on nano-gpt) and no MRCR/RULER retrieval-depth curve is published.
- **Multimodal: 60/100.** Image input with mid-pack MMMU-Pro 73.5% and decent chart reading (CharXiv 82%), but GDP.pdf 12.8% is weak and there is no video, audio, or image-generation path.
- **Coding: 68/100.** SWE-bench Verified 77.6% and LiveCodeBench (Vals) 85.5% are genuinely good, held back by SWE-bench Pro 54.3%, FrontierSWE v2 4.1% and AA Coding Index 52.1.
- **Cost efficiency: 80/100.** Open weights make self-hosting free and Inkling-Small is cheap ($0.50/$1.20); capped because hosted Inkling at $0.95/$4.05 is mid-priced and there is no OpenCode Zen Free ID.
- **Overall Score: 61.8/100.** (48 + 55 + 78 + 60 + 68) / 5 = 61.8 — best used as an open-weight, long-context single-shot reasoning and code-completion model with tight supervision, not as an autonomous agent.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `inkling` refreshed 2026-09-28, models.dev provider/pricing index); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
