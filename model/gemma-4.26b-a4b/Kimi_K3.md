# Gemma 4 26B A4B — findings by Kimi K3

- Source: Google (`gemma4:26b` / HF `google/gemma-4-26b-a4b-it`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (MoE)
- **Short description:** Google's sparse MoE entry in the Gemma 4 family (launched 2026-04-02): 25.2B total parameters with only ~3.8B active per token — near-31B quality at near-4B inference speed. Called "arguably the most practical model in the lineup" by Gemma4All for the quality/efficiency balance.
- **Provider / access:** Open weights on Hugging Face / Kaggle (incl. official QAT checkpoints: `-qat-q4_0-gguf`, `-qat-w4a16-ct`); Ollama tag `gemma4:26b`. Free hosted tier via Google AI Studio.
- **Release / knowledge:** 2026-04-02 (family launch; markaicode/google docs, model card last updated 2026-06-26). Knowledge cutoff not stated in sources read.
- **IDs:** `gemma4:26b` (Ollama — note: no official `27b` tag exists; that was Gemma 3), `google/gemma-4-26b-a4b-it` (HF). No Zen Free ID verified.
- **Context window:** 256K tokens (markaicode lineup, per Google docs); MRCR v2 8-needle retrieval at 128K: 44.1%.
- **Modalities:** Text + image input (text out); the only Gemma 4 size besides 31B without native audio input. Thinking mode on IT checkpoint (scores below are thinking-enabled); tool calling supported.
- **Pricing (as of 2026-10-05):** Open weights — self-host (BF16 ≈ 57.7 GB, Q4_0 ≈ 14.4 GB VRAM, weights only; KV cache extra and grows fast at 256K). Note: all 25.2B must stay memory-resident despite 3.8B active.
- **Architecture:** Sparse MoE, 25.2B total / 3.8B active, 30 layers, 8 active of 128 experts + 1 shared. Apache 2.0 per markaicode lineup notes.

### Raw benchmarks found

Official Google model-card figures, instruction-tuned with thinking (via gemma4all.com / markaicode.com):

Agent / tool use:

- τ2-bench (avg over 3 domains): **68.2%**
- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval / Toolathlon / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- LMArena Elo: **1441** (thinking; Arena AI leaderboard, April 2026 — 11 points behind 31B)
- GPQA Diamond: **82.3%**
- MMLU Pro: **82.6%**
- AIME 2026 (no tools): **88.3%**
- BigBench Extra Hard: **64.8%**
- HLE / LCR / CritPt / AA Intelligence Index: **no verified public score found**

Coding:

- LiveCodeBench v6: **77.1%**
- Codeforces Elo: **1718** ("Expert" rank)
- SWE-bench Verified/Pro / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- MRCR v2 8-needle 128K (avg): **44.1%** — the weak spot vs 31B's 66.4%.

Vision:

- MMMU Pro: **73.8%**; MATH-Vision: **82.4%**; OmniDocBench 1.5 edit distance: **0.149**.

### Normalized scores (1–100)

- **Tool use: 71/100.** τ2-bench 68.2 upper-mid band; no additional agentic benchmarks published.
- **Reasoning: 83/100.** GPQA 82.3 / AIME 88.3 / MMLU Pro 82.6 plus Arena 1441 — near-frontier reasoning at 3.8B active params; just under the 90+ tier.
- **Context window: 68/100.** 256K window (65–84 band) with weak measured 128K retrieval (44.1%) holding it down.
- **Multimodal: 72/100.** Text+image in with strong measured vision (MMMU Pro 73.8, MATH-V 82.4) but no audio (unlike E2B/E4B/12B) and text-only output.
- **Coding: 79/100.** LiveCodeBench v6 77.1 and Codeforces 1718 — high-mid coding; no SWE-bench published.
- **Cost efficiency: 97/100.** Open weights; Q4_0 fits in 14.4 GB while generating at ~4B-class speed — cheapest quality-per-watt in the family after the E-series.
- **Overall Score: 74.6/100.** Mean of five quality dims (71+83+68+72+79)/5 = 74.6 → 75... computed half-up from the actual figures: 373/5 = 74.6 → **75**. Best fit: fastest good-quality open model for single-GPU serving when 24 GB VRAM is the budget.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-05
- Method: public internet research (Gemma4All benchmark deep-dive, markaicode lineup/VRAM guide citing Google's model card; Arena AI leaderboard as cited); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
