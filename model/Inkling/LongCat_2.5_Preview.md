# Inkling — findings by LongCat 2.5 Preview

- Source: Thinking Machines Lab (`thinkingmachines/Inkling`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's first open-weights model — a 975B-total/41B-active multimodal MoE with hybrid sparse+linear attention, built for customizable agents, document/image/audio understanding, and long-context work.
- **Provider / access:** Open weights — `thinkingmachines/Inkling` (HuggingFace; vLLM/SGLang/TokenSpeed/Transformers). Hosted API on Eden AI, OpenRouter, Together, Venice, Vercel AI Gateway. Released 2026-07-15.
- **Release / knowledge:** Released 2026-07-15; knowledge cutoff December 2025.
- **IDs:** `thinkingmachines/Inkling` (HF), `thinkingmachines/inkling` (OpenRouter). No Zen Free ID — paid API / Apache 2.0 open weights.
- **Context window:** 1,048,576 tokens; max output ~1M.
- **Modalities:** Text, image, audio in; text out; reasoning yes (controllable thinking effort 0.2–0.99); function calling, structured outputs, prompt caching.
- **Pricing (as of 2026-09-27):** $0.95–1.87/M in, $4.05–4.68/M out (hosted providers); Apache 2.0 weights for self-hosting.
- **Architecture:** 975B total params, 41B active; MoE with hybrid sparse + linear attention; Manifold-constrained hyper-connections; 30T-token multimodal pretraining corpus; Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** (best harness, effort 0.99); Terminal-Bench 2.0: **76.2%**
- Terminal-Bench 3.0: **14.6%**; Terminal-Bench 4.0: **12.4%**
- CoWorkBench: **70.7%**; Toolathlon Verified: **72.5%**
- JobBench: **33.4%**; AutomationBench: **27.3%**; WideSearch: **81.9%**

Reasoning / knowledge:

- GPQA Diamond: **89.5%**
- HLE: **31.6%** no tools / **46.0%** with tools
- Artificial Analysis Intelligence Index: **42.3** (#49)
- Agents' Last Exam: **42.9%** (score)

Coding:

- SWE-bench Verified: **80.2%**
- LiveCodeBench (Vals): **80.5%**
- SWE-bench Pro Public: **54.3%**

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

### Normalized scores (1–100)

- **Tool use: 72/100.** TB2.1 63.8% and TB2.0 76.2% are solid; CoWorkBench 70.7% and Toolathlon 72.5% confirm mid-upper agentic performance; TB4.0 12.4% and JobBench 33.4% cap the dimension.
- **Reasoning: 75/100.** GPQA 89.5% is a notch under the 90%+ frontier bar; HLE 31.6%/46.0% and AA Index 42.3 sit mid-upper band.
- **Context window: 95/100.** 1M tokens with ~1M output earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 85/100.** Text/image/audio input lands in the 75–90 band; text-only output caps it there.
- **Coding: 72/100.** SWE-bench Verified 80.2% and LiveCodeBench 80.5% are strong; SWE-bench Pro 54.3% keeps the dimension mid-upper.
- **Cost efficiency: 90/100.** $1.87/$4.68 hosted pricing is far below the ~$0.60/$2.20 ≈ 92 reference point; Apache 2.0 weights can self-host at infrastructure cost.
- **Overall Score: 80/100.** Mean of the five quality dims (72+75+95+85+72)/5 = 79.8 → 80. Best-fit: self-hostable open-weight generalist for agentic, multimodal, and long-context workloads at exceptional economics.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (TML launch post + model card, BenchLM, Vals.ai, CloudPrice, VernaOne); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
