# Kimi K3 — findings by DeepSeek 4.1 Flash

- Source: Moonshot AI (`kimi-k3`), also served as `moonshotai/kimi-k3` on OpenRouter
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-verified 2026-10-06: Moonshot's launch blog and BenchLM's Oct-7 snapshot are now fully
> public, correcting AA-LCR (74.7 → 88.7) and filling the coding/agentic/multimodal suites.

## Model card

- **Name:** Kimi K3 (Moonshot AI flagship; API ID `kimi-k3`). Not an alias of Kimi K2.7 Code.
- **Short description:** Moonshot AI's 2.8-trillion-parameter MoE flagship (released 2026-07-16), billed as the world's first open 3T-class model, built for long-horizon agentic coding, knowledge work and 1M-token reasoning with native vision.
- **Provider / access:** Moonshot API (`kimi-k3`), first-party apps (Kimi.ai, Kimi Work, Kimi Code) and OpenRouter (`moonshotai/kimi-k3`). No OpenCode Zen ID.
- **Release / knowledge:** Released 2026-07-16; full weights promised by 2026-07-27. Knowledge cutoff not published.
- **IDs:** `moonshotai/kimi-k3` (OpenRouter), `kimi-k3` (Moonshot API). No Zen Free ID, so cost is scored on paid pricing.
- **Context window:** 1,048,576 (1M) tokens in; 131,072+ output. BenchLM lists 1.05M.
- **Modalities:** text + image in; text (plus tool calls/code) out; native vision, thinking always on. No audio/video; PDF corpora consumed as rendered images.
- **Pricing (as of 2026-10-06):** $3.00 in / $15.00 out per 1M, $0.30 cache-hit input, no full-window surcharge; ≈$0.94/task measured by AA. No free tier.
- **Architecture:** 2.8T total-parameter sparse MoE (896 experts, 16 activated/token), Stable LatentMoE + Kimi Delta Attention (KDA) + Attention Residuals, MXFP4 weights. Open-weight license conflicting (Apache 2.0 vs Modified-MIT).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot) / **85%** (AA) / **80.9%** (Vals); AA Terminal-Bench 4.0 **12.6%**
- BrowseComp **91.2%**; DeepSearchQA **95.0%**; Toolathlon-Verified **73.2%**; MCP Atlas **84.2%**; AutomationBench **30.8%**
- GDPval-AA **1,537** raw / **51.8%** normalized; AA Agentic Index **50.6%**; APEX-Agents-AA **41.3%**; APEX-Agents **37.6%**
- AA-Briefcase **1501**; AA Harvey LAB **94.6%**; AA AutomationBench **58.3%**; AA Tau3 Banking **46.0%**; AA ITBench **47.7%**; JobBench **52.9%**; DECK-Bench **73.5%**; ApprenticeBench **18%**
- Aider Polyglot / Program Bench **77.8%** each; SWE Marathon **42.0%** (Moonshot)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot / AA); MMLU-Pro **88.0%** (Vals)
- HLE: **56%** (with tools) / **43.5%** (no tools); AA-HLE **46.9%**
- AA-LCR **88.7%**; CritPt **23.4%**; MLCR-AA **38.3%**; ARC-AGI-1 **94.5%**, ARC-AGI-2 **60.4%**
- Artificial Analysis Intelligence Index **43.6%**; BenchLM overall **70.64/100**, #15 of 887
- Omniscience Accuracy **47.6%** / Hallucination Rate **53.2%**
- Gray Swan IPI (15 attempts) **52.7%**

Coding:

- DeepSWE **67.5%**; SWE-bench Verified **93.4%** (Vals); LiveCodeBench **87.2%** (Vals); AA Coding Index **76.2%**
- FrontierSWE **81.2%**; ProgramBench **77.8%**; Kimi Code Bench v2 **72.9%**; AA-SciCode **59.5%**; CursorBench 3.2 **60.8%**; VulcanBench v3 **73.7%**; FrontierSWE v2 **25.9%**; SWE Marathon **42.0%**

Multimodal:

- MMMU-Pro **81.6%** / with Python **83.4%**; AA-MMMU-Pro **80.5%**; MathVision **94.3%** / with Python **97.8%**; CharXiv **91.3%**; OmniDocBench **91.1%**; OfficeQA Pro **63.3%**

Long context:

- AA-LCR **88.7%** on the 1M window (previous 74.7 superseded); BrowseComp 90.4% uncompacted at full 1M vs 91.2% with 300K compaction; MLCR-AA 38.3%. No standard MRCR/RULER.

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 88.3%, BrowseComp 91.2%, DeepSearchQA 95.0%, Toolathlon 73.2%, MCP Atlas 84.2% and AA Agentic 50.6% are frontier-grade; capped by AA TB 4.0 12.6%.
- **Reasoning: 93/100.** GPQA Diamond 93.5%, HLE 56% with tools, AA-LCR 88.7% and ARC-AGI-2 60.4% lead open weights; held by AA Index 43.6% and CritPt 23.4%.
- **Context window: 96/100.** 1M input with 131K+ output and AA-LCR 88.7%; the ≥98%-at-512K condition for 100 is unmet.
- **Multimodal: 70/100.** Native image input with strong vision scores (MathVision 97.8%) is the top of the image-only band; no audio/video in, no non-text out.
- **Coding: 89/100.** Vals SWE-bench 93.4%, LiveCodeBench 87.2%, DeepSWE 67.5%, AA-SciCode 59.5% and Coding Index 76.2%; capped by vendor-run SWE-bench and FrontierSWE v2 25.9%.
- **Cost efficiency: 63/100.** Premium $3/$15 with $0.30 cached input maps to the ~60 anchor; nudged up for a sub-$1 AA cost per task and free prefix caching.
- **Overall Score: 88/100.** Cost-excluded v4 mean of the five quality dims (92 + 93 + 96 + 70 + 89) / 5 = 88.0 → **88**. Best fit: near-frontier reasoning plus a genuine 1M window at premium rates; pair with a coding specialist for image-only modality gaps.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-06
- Method: public internet research (Moonshot AI Kimi K3 launch blog, BenchLM 2026-10-07 snapshot, Artificial Analysis, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
