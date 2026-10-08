# Kimi K3 — findings by GLM 5.3

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-10-08 (UTC) — enrichment pass over the 2026-09-24 report (fresh search 2026-10-08: GDPval updated 1524→1537; new TB4.0/ARC-AGI/VulcanBench/sweMarathon rows; Tool 90→86, Reasoning 89→87, Coding 90→88 on the new evidence)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's flagship July 2026 open-weights reasoning MoE (2.8T total / 104B active) — #3 open-weights model on the AA Intelligence Index. Top use case: frontier-grade agentic coding and research with self-host option.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` (openai-compatible); Kimi/Moonshot API; Hugging Face `moonshotai/Kimi-K3` for self-hosting (21 API providers listed by AA).
- **Release / knowledge:** 2026-07-16; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/kimi-k3` (Zen; no Free ID — paid only); `moonshotai/Kimi-K3` (HF)
- **Context window:** 1M tokens total (1.05M per BenchLM; AA lists 1M).
- **Modalities:** text/image in; text out; reasoning yes (max effort default); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $3.00 in / $15.00 out per 1M (cached read $0.30); Kimi API same headline; self-hosting possible (open weights).
- **Architecture:** Mixture of Experts, 2.8T total / 104B active parameters; open weights under the Kimi K3 License (commercial use with restrictions).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (BenchLM `kimi-k3`; Vals harness 80.9%; AA harness **85%** — new)
- AA Terminal-Bench 4.0: **12.6%** (new 2026-10-08 evidence — near-bottom of the tracked frontier field on the newest harness)
- Tau3-Banking (AA harness): **46.0%** (BenchLM)
- GDPval-AA: **1537 Elo** (BenchLM AA, updated 2026-10-08 from 1524; normalized 51.8%)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon-Verified: **73.2%**; MCP-Atlas **84.2%**; BrowseComp **91.2%**; DeepSearchQA **95.0%**; DECK-Bench **73.5%** (new); AA Agentic Index **50.6%**; AA Briefcase Elo **1501**; AA Harvey LAB **94.6%**; AA ITBench **47.7%**; AA AutomationBench **58.3%**; JobBench **52.9%**; APEX-Agents **37.6%** / APEX-Agents-AA **41.3%** (new); AA EnterpriseOps-Gym **45.3%** (new); AA-AnalystAgent **38.8%** (new); GDP.pdf **22.0%** (new); ApprenticeBench **18%** (new); SpreadsheetBench 2 **34.8%** (new); AutomationBench (system card) **30.8%** (new) (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (BenchLM; Vals 92.9%)
- HLE: **46.9%** AA harness / **56%** w/ tools / **43.5%** w/o tools (BenchLM)
- ARC-AGI-1: **94.50%** / ARC-AGI-2: **60.4%** (ARC Prize verified results — new 2026-10-08 evidence; ARC-AGI-2 well behind frontier ~90%)
- AA-LCR: **88.7%** (BenchLM — one of the best long-context reasoning scores); CritPt **23.4%**; MLCR-AA **38.3%**
- Artificial Analysis Intelligence Index: **43.6** (max effort, AA #3/115 open-weights class)
- Omniscience Index **19.7** (new); Accuracy **47.6%** / Hallucination Rate **53.2%** (BenchLM)
- MMLU-Pro (Vals): **88.0%** (BenchLM)
- Gray Swan IPI (15 attempts): **52.7%** (new 2026-10-08 evidence — high injection susceptibility)

Coding:

- SWE-bench Verified (Vals): **93.4%**
- DeepSWE: **67.5%** (BenchLM)
- LiveCodeBench (Vals): **87.2%**
- SciCode / AA-SciCode: **59.5%** (BenchLM)
- AA Coding Index: **76.2%**; FrontierSWE v1 **81.2%** / v2 **25.9%**; CursorBench 3.2 **60.8%**; ProgramBench **77.8%**; Kimi Code Bench v2 **72.9%**; VulcanBench v3 **73.7%** (new); sweMarathon **42%** (new); PostTrainBench v1.1 **32.0%** (new); MLS-Bench Lite **48.3%** (new); OpenHarmony Bench **57.3%** (new) (BenchLM)
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M window (AA/BenchLM); AA-LCR 88.7% at long context; no MRCR/RULER retrieval-at-512K number published for this ID.

Multimodal (grounding):

- MMMU-Pro **81.6%** (AA 80.5%; w/ Python **83.4%** — new); MathVision **94.3%** / w/ Python **97.8%**; CharXiv **91.3%** (w/o tools **84.8%** — new); OmniDocBench **91.1%**; OfficeQA Pro **63.3%** (new); BabyVision w/ Python **85.7%** (new); ZeroBench **23.0%** / w/ Python **41.0%** (new); WorldVQA **51.0%** (new); PerceptionBench **58.5%** (new); Design Arena Website **1343** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 88.3/85% hits the frontier ref, MCP-Atlas 84.2%, BrowseComp 91.2%, DECK-Bench 73.5% and Agentic Index 50.6% are top-tier; tempered hard by the 2026-10-08 new-harness evidence — AA TB4.0 12.6%, GDP.pdf 22.0%, AnalystAgent 38.8%, ApprenticeBench 18%.
- **Reasoning: 87/100.** GPQA 93.5% and HLE 46.9–56% clear the frontier bars and AA-LCR 88.7% is excellent, but the new ARC-AGI-2 60.4% (far behind frontier ~90%), CritPt 23.4%, a 53.2% hallucination rate and Gray Swan IPI 52.7% cap it.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 70/100.** Text+image input only (AA verified) — top of the "+image in" band, backed by MathVision 94.3%/CharXiv 91.3%.
- **Coding: 88/100.** SWE-bench V 93.4%, LiveCodeBench 87.2%, SciCode 59.5%, Coding Index 76.2%, VulcanBench 73.7% all clear frontier refs; DeepSWE 67.5% misses 74% and the new sweMarathon 42% / PostTrainBench 32% / FrontierSWE v2 25.9% drag.
- **Cost efficiency: 60/100.** $3/$15 per 1M on the evaluated tier matches the $3/$15 ≈ 60 anchor exactly; slow (35 tok/s); open weights soften this for self-hosters.
- **Overall Score: 85.2/100.** (86 + 87 + 95 + 70 + 88) / 5 = 85.2 (adjusted from 86.8 on 2026-10-08 new-harness evidence). Best-fit: the leading open-weights agentic/research pick — near-frontier on 2026-era benches, visibly behind on the newest harnesses (TB4.0, ARC-AGI-2, sweMarathon); self-host sovereignty at premium API prices.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-08 (enrichment pass over 2026-09-24 report, user-approved)
- Method: public internet research (Artificial Analysis, BenchLM, Moonshot launch blog, ARC Prize, Vals, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores. September core numbers re-verified; ~25 new rows added and Tool/Reasoning/Coding adjusted down on new-harness evidence (Overall 86.8 → 85.2).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
