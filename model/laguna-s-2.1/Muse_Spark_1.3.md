# Laguna S 2.1 — findings by Muse Spark 1.3

- Source: Poolside/Laguna S 2.1 (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-21 (UTC), re-verified 2026-10-16 (UTC, see Re-verification section; scores hold 68)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1 (Poolside, open-weights agentic coding)
- **Short description:** Poolside's July 2026 118B/8B-active open-weights MoE for agentic coding and long-horizon work — the West's leading open option in its size class, small enough for a single DGX Spark yet matching models many times its size.
- **Provider / access:** Poolside via Hugging Face (`poolside/Laguna-S-2.1`) + Ollama (`laguna-s-2.1`, 256K variants) + ModelScope; chat.poolside.ai web chat (tool calling, per-request thinking toggle, speculative DFlash draft serving).
- **Release / knowledge:** 2026-07-21 release (training to launch under nine weeks); knowledge cutoff undisclosed
- **IDs:** `laguna-labs/laguna-s-2.1` (state explicitly: no Free ID exists on Zen; vendor is Poolside, not Laguna Labs)
- **Context window:** 1,048,576 total — verified via Poolside launch materials and ModelScope page (Ollama local variants capped at 256K/262144)
- **Modalities:** text in/out only (text-to-text); reasoning yes (interleaved thinking between tool calls, thinking/no-thinking modes); tool calls yes
- **Pricing (as of 2026-09-21):** ~$0.10 in / $0.20 out per 1M via API routes (orcarouter model page); open weights under OpenMDW-1.1 (fully permissive, commercial use allowed)
- **Architecture:** open-weights MoE, 118B total / ~8B active, 48 layers (12 global + 36 sliding-window-512, 1:3), 256 routed experts top-10 + 1 shared, GQA 8 KV heads, softplus gating, per-layer rotary scales; FP8/NVFP4/INT4/GGUF quantized variants

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Vendor numbers below are Poolside's release-day table (Jul 21, 2026, pool agent harness, Harbor fork, up to 500 steps, mean pass@1, full trajectories published) unless noted.

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (Poolside release table; Ollama library tagline confirms; vs Hy3 71.7%, Inkling 63.8%, Nemotron 3 Ultra 56.4%)
- Toolathlon Verified: **49.7%** (Poolside release table via ModelScope page)
- SWE Atlas Codebase QnA: **46.2%** (same table)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (closest proxy: BenchLM page shows 6 rows but no overall rank)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **59.4% SWE-Bench Pro (public dataset)** (Poolside release table; vs Hy3 57.9%, MiniMax M3 59.0%, Qwen 3.7 Max 60.6%)
- SWE-bench Multilingual: **78.5%** (same table; leading open disclosed-size model; vs Hy3 75.8%)
- DeepSWE v1.1: **40.4%** (same table; max-thinking, up from 16.5% no-think; vs V4-Pro-Max 9.0%)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- Real-world color: browser engine from scratch rendered HTML/CSS in 50 minutes (GIGAZINE via Poolside materials)

Long context:

- **1M window verified from vendor spec** (Ollama local builds 256K); long-horizon tasks lasting hours with rising completion vs output tokens in thinking mode; no verified MRCR v2 / RULER / GraphWalks percentage found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 78/100.** TB2.1 70.2% at 118B/8B with Toolathlon 49.7% and Atlas QnA 46.2% shows standout small-model agency; capped by missing Tau3/GDPval/MCP harnesses.
- **Reasoning: 70/100.** Multilingual 78.5% and browser-engine-from-scratch evidence imply solid reasoning, but zero published GPQA/HLE/LCR/CritPt absolutes cap this at provisional.
- **Context window: 95/100.** Vendor-verified 1M (local builds 256K) maps to the top tier; capped below 100 without retrieval-saturation proof and given the 256K local-variant split.
- **Multimodal: 15/100.** Text-to-text only per spec; 15 is the text-only floor.
- **Coding: 80/100.** Multilingual 78.5% (open lead), SWE-Pro 59.4% and DeepSWE 40.4% (4.5x V4-Pro-Max) show efficient coding; capped by missing LiveCodeBench/SciCode absolutes.
- **Cost efficiency: 97/100.** ~$0.10/$0.20 API with fully permissive open weights approaches the $0 band.
- **Overall Score: 68/100.** Mean of the five non-cost dims (78+70+95+15+80)/5 = 67.6; best-fit Western open-weights pick for single-machine agentic coding with data-in-house control.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-09-21
- Method: deeper public internet research superseding the 2026-09-18 excluded attempt (Poolside launch blog + press release, ModelScope model page, Ollama library page, orcarouter pricing page, BenchLM model page, GIGAZINE coverage; vendor is Poolside); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Re-verification — 2026-10-16 (25 days after 2026-09-21)

Original research date 2026-09-21. Re-run requested by the user to compare prior findings against current data and fill missing-data gaps. Original findings above are preserved; corrections are marked inline.

Three independent searches performed 2026-10-16: (1) official Poolside launch blog + press release (Jul 21, 2026 — TB2.1 70.2%, Toolathlon 49.7%, Atlas QnA 46.2%, SWE-Pro 59.4%, Multilingual 78.5%, DeepSWE 40.4%, 1M context, 118B/8B MoE), (2) HF poolside/Laguna-S-2.1 + ModelScope + Ollama pages (spec, quantized variants, 256K local builds), (3) BenchLM model page + orcarouter pricing (~$0.10/$0.20, OpenMDW-1.1). Conflicting results compared below.

| Dimension | 2026-09-21 | 2026-10-16 | Change |
|---|---|---|---|
| Tool use | 78 | 78 | hold — TB2.1 70.2% + Toolathlon 49.7% + Atlas QnA 46.2% stand; no Tau3/GDPval/MCP absolute |
| Reasoning | 70 | 70 | hold — provisional; still zero GPQA/HLE/LCR/CritPt absolutes |
| Context | 95 | 95 | hold — vendor 1M (local 256K) stands; no retrieval-saturation proof |
| Multimodal | 15 | 15 | hold — text-to-text only stands; floor applies |
| Coding | 80 | 80 | hold — Multilingual 78.5% open lead + SWE-Pro 59.4% + DeepSWE 40.4% stand; no LiveCode/SciCode absolute |
| Cost | 97 | 97 | hold — ~$0.10/$0.20 + permissive open weights stands |
| Overall | 68 | 68 | hold — (78+70+95+15+80)/5 = 67.6 → 68 |

Reasoning remains provisional (70 on zero absolutes) — flagged again; no new adverse evidence meets the bar for a downward change. No GPQA/HLE, no Tau, no LiveCode, no MRCR absolute found — prior gaps stand. Scores hold.

Sources: https://poolside.ai/blog/laguna-s-2-1 · https://huggingface.co/poolside/Laguna-S-2.1 · https://ollama.com/library/laguna-s-2.1
