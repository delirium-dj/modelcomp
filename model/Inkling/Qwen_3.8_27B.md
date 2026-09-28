# Inkling — findings by Qwen 3.8 27B

- Source: Thinking Machines Lab/Inkling (`opencode/Inkling`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's open-weight multimodal MoE (975B total, 41B active) for general-purpose reasoning, coding, agentic and tool-use systems; sibling Inkling-Small also tracked by BenchLM. Not a variant/alias of another entry.
- **Provider / access:** OpenCode Zen `opencode/Inkling`; public hosting `thinkingmachines/inkling` on OpenRouter (DeepInfra FP8 + Together endpoints, snapshot `20260715`); open weights.
- **Release / knowledge:** ~2026-07-15 (OpenRouter snapshot suffix `20260715`); knowledge cutoff: no verified public figure found.
- **IDs:** `opencode/Inkling` (repo entry), `thinkingmachines/inkling` (OpenRouter). No Free ID noted on the repo entry.
- **Context window:** 1M per BenchLM model details; public OpenRouter endpoints serve 512K (max out 262K–472K). Repo meta lists 128K total — a placeholder not verified against any public source; scored on the verified 1M native window.
- **Modalities:** text + image + audio in, text out (OpenRouter endpoint `input_modalities: [text, image, audio]`; BenchLM has vision benchmarks); reasoning yes (hybrid, reasoning_effort supported); tool calls yes (full tool_choice).
- **Pricing (as of 2026-09-28):** DeepInfra $0.95 in / $4.05 out / $0.16 cached read per 1M; Together $1.00 in / $4.05 out / $0.17 cached read per 1M. Paid.
- **Architecture:** Open-weight MoE — 975B total / 41B active parameters (OpenRouter description); license not confirmed in this pass.

### Raw benchmarks found

All raw numbers from BenchLM `inkling` page (updated 2026-09-28; overall 54.24/100, rank #62 of 511; 46 rows covered):

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** (Vals 47.6%; AA harness 55.1%; AA TB 4.0 **1.0%**)
- Tau3-Banking / Tau2-Bench: AA Tau3-Banking **29.1%**
- GDPval-AA: **1,064** Elo / 28.2% normalized (AA Briefcase **834** Elo)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP Atlas **74.1%**
- Extras: BrowseComp **77.1%**, AA Agentic Index **24.3%**, AA AutomationBench **5.0%**, AA EnterpriseOps-Gym **38.0%**, AA-AnalystAgent **23.8%**, Design Arena Agentic Web Dev **1257** Elo

Reasoning / knowledge:

- GPQA Diamond: **87.9%** (AA-GPQA Diamond 87.2%; Vals 87.1%)
- HLE: **46%** (HLE w/o tools **30%**; AA-HLE **31.9%**)
- LCR / MLCR: LCR **77.3%**, MLCR-AA **12.2%**
- CritPt: **5.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **25.0** / **54.24 #62 of 511**; AIME26 **97.1%**, IFBench **79.8%**
- Omniscience Accuracy / Hallucination Rate: **41.6%** (AA-Omniscience)

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench Verified **77.6%** (Vals 77.6%); SWE-bench Pro **54.3%**
- LiveCodeBench: **85.5%** (Vals harness)
- SciCode / AA-SciCode: **47.0%**
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: AA Coding Index **52.1%**, FrontierSWE v2 **4.1%**

Long context:

- 1M native context (BenchLM); LCR **77.3%**; no MRCR at 512K+ published.

Multimodal:

- MMMU-Pro **73.5%** (AA-MMMU-Pro 73.5%), CharXiv **82.0%** (w/o tools 78.1%), Design Arena Website **1229** Elo; audio-in supported per public endpoint (no audio benchmark found).

### Normalized scores (1–100)

- **Tool use: 70/100.** MCP Atlas 74.1%, BrowseComp 77.1%, TB2.1 63.8% (mid band upper half) and Tau3 29.1% are solid; GDPval-AA 1,064 is mid-band and the AA Agentic Index (24.3) / AutomationBench (5.0%) are weak, capping the score.
- **Reasoning: 80/100.** GPQA Diamond 87.9% is near-frontier, AIME26 97.1% is excellent, and BenchLM HLE 46% clears the 40% mark, but CritPt 5.4%, MLCR-AA 12.2%, and a mid-band AA Index (25.0) keep it out of the top tier.
- **Context window: 95/100.** Verified 1M native context (BenchLM) qualifies for the ≥1M tier (95–100); LCR 77.3% supports the tier floor, with no ≥98% retrieval at 512K+ published.
- **Multimodal: 90/100.** Verified text+image+audio in / text out on public endpoints — audio-in lands in the 90–100 tier; MMMU-Pro 73.5% and CharXiv 82% back strong vision; repo meta's "text in/out" noted as an unverified placeholder.
- **Coding: 80/100.** SWE-bench Verified 77.6% and LiveCodeBench 85.5% are strong, but AA Coding Index 52.1%, SWE-Pro 54.3%, AA-SciCode 47.0%, and FrontierSWE v2 4.1% hold it at the top of the mid tier.
- **Cost efficiency: 88/100.** $0.95–1.00 in / $4.05 out per 1M sits between the ~$0.60/$2.20 (≈92) and $1.25/$4.25 (≈88) reference points, at the pricier end.
- **Overall Score: 83/100.** Mean of 70/80/95/90/80 = 83.0 → 83 (half-up); best fit: long-context, multimodal (incl. audio) general agent at mid-frontier quality — a value pick when full frontier reasoning isn't required.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-28
- Method: public internet research (BenchLM model page, OpenRouter endpoint records); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
