# Ling 3.0 Flash Fin Free — findings by Muse Spark 1.3 Free

- Source: InclusionAI/Ling 3.0 Flash Fin, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free (InclusionAI / Ant Group, finance-tuned)
- **Short description:** Finance-enhanced MoE by InclusionAI / Ant Group for financial research and tool-intensive workflows, retaining strong coding and math; served as a limited-time free promo on Zen.
- **Provider / access:** InclusionAI via HF `inclusionAI/Ling-3.0-flash` (+ Fin variant); OpenCode Zen `opencode/ling-3-0-flash-fin-free` (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-09-04 HF last-modified; Fin variant announced 2026-09-16 (Artificial Analysis); knowledge cutoff undisclosed
- **IDs:** `opencode/ling-3-0-flash-fin-free` (Free promo ID exists on Zen)
- **Context window:** 262,144 (256K marketed) / 32K out — verified via Pi/Vercel model pages
- **Modalities:** text in/out only; reasoning yes (thinking on/off); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-18):** Free $0 Zen limited-time promo tier
- **Architecture:** Bailing hybrid MoE, ~128B class (MIT licensed for base Flash)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **22.7%** (HF eval_results hle.yaml for Ling-3.0-flash base, rank 42)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **53.9 BenchLM (#110/228, Ling-3.0-flash base)** (BenchLM)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **56.6% SWE-Bench Pro** (HF eval_results for Ling-3.0-flash base, rank 18); **72.4% SWE-bench Multilingual resolved** (HF, rank 13, size-rank #1 under 128B)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 68/100.** Finance tool-intensive positioning with strong HF coding-adjacent signal but no published agentic harness (TB/Tau/GDPval) numbers; caps the score.
- **Reasoning: 70/100.** AIME 93.2% and HMMT 87% math strength (HF card) offset by HLE 22.7%; caps below frontier generalists.
- **Context window: 72/100.** 256K class maps to low-70s tier; capped well below 1M models.
- **Multimodal: 15/100.** Text-only per curated metadata; 15 is the text-only floor.
- **Coding: 72/100.** SWE-Pro 56.6% and Multilingual 72.4% are solid mid-tier; capped below 60%+ SWE-Pro frontier.
- **Cost efficiency: 100/100.** $0 Free Zen limited-time promo tier.
- **Overall Score: 59/100.** Mean of the five non-cost dims (68+70+72+15+72)/5 = 59.4; best-fit niche finance + efficient execution pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Hugging Face model card + eval_results, BenchLM, Pi/Vercel model pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
