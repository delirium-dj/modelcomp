# Qwen 3.5 35B-A3B — findings by Step 5 Preview

- Source: Alibaba / Qwen3.5-35B-A3B (`qwen/qwen3.5-35b-a3b`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B-A3B
- **Short description:** Alibaba's February 2026 mid-wave open-weight MoE — 35B total / 3B active on a hybrid linear-attention + sparse-MoE stack with 262K native context (YaRN to ~1M) and native vision-language I/O, posting GPQA 84.2%, SWE-bench Verified 69.2% and τ²-bench 89.2% at $0.14/$1.00 per 1M; succeeded by Qwen3.6-35B-A3B in April 2026.
- **Provider / access:** Open weights (HF `Qwen/Qwen3.5-35B-A3B` + FP8, Apache 2.0); a broad provider market (Alibaba Model Studio $0.163/$1.30, Parasail/Venice/Ionstream/NextBit/AkashML/DekaLLM/DeepInfra/WandB/CoreWeave $0.14/$1.00, Darkbloom $0.065/$0.75); not on OpenCode Zen.
- **Release / knowledge:** released 2026-02-24/25 (the Qwen3.5 "Medium Series" wave with the 27B and 122B-A10B, techie007); knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-35b-a3b` (route style; versioned endpoint `qwen3.5-35b-a3b-20260224`), `Qwen/Qwen3.5-35B-A3B` (HF).
- **Context window:** 262,144 native, extensible to ~1,000,000 via YaRN (llm-stats, GitHub serving notes).
- **Modalities:** text, image, video in; text out; built-in thinking mode (chain-of-thought); tool calling/function calling + MCP; 201 languages.
- **Pricing (as of 2026-10-21):** $0.14/$1.00 per 1M (cached $0.05) across the cheap provider tier (llm-stats, Benchable endpoint list); free self-host under Apache 2.0 (78+ tok/s on NVIDIA hardware per LLM Reference).
- **Architecture:** MoE 35B total / 3B active; native vision-language with hybrid architecture (linear attention + sparse MoE) per the model card.

### Raw benchmarks found

Qwen3.5-35B-A3B model card + Artificial Analysis figures via BenchLM + Benchable endpoint/price record:

Agent / tool use:

- τ²-bench: **89.2%** (Artificial Analysis via BenchLM)
- BrowseComp: **61%** (model card via BenchLM)
- OSWorld-Verified: **54.5%** (model card via BenchLM)
- Terminal-Bench 2.0: **40.5%** (model card via BenchLM) — mid-weak
- Gert Labs: **29.0%** (Gert Labs via BenchLM)
- Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (model card via BenchLM); **84.5%** (Artificial Analysis via BenchLM)
- MMLU-Pro: **85.3%** (model card via BenchLM); SuperGPQA: **63.4%**; MMLU-ProX: **81%** (model card)
- AA-HLE: **21.0%** (Artificial Analysis via BenchLM) — mid-low
- Artificial Analysis Intelligence Index: **19.3%** (Artificial Analysis via BenchLM — low-mid)
- AA-LCR (long-context reasoning): **72.0%** (Artificial Analysis via BenchLM)
- LongBench v2: **59%** (model card via BenchLM)
- CritPt: **0.9%** (Artificial Analysis via BenchLM) — near-zero
- AA-Omniscience: Accuracy **20.1%**, Hallucination Rate **85.4%** (Artificial Analysis via BenchLM)
- IFEval: **91.9%** (model card via BenchLM); AA-IFBench: **72.5%** (Artificial Analysis via BenchLM)

Coding:

- SWE-bench Verified: **69.2%** (model card via BenchLM)
- LiveCodeBench v6: **74.6%** (model card via BenchLM)
- SWE-Rebench: **53.7%** (SWE-Rebench leaderboard via BenchLM)
- Terminal-Bench 2.0: **40.5%** (listed above)
- SWE-bench Pro / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR **72.0%** and LongBench v2 59% (AA / model card via BenchLM) on the 262K native window; the YaRN ~1M extension is static-factor; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Multimodal extras (traceability): MMMU 81.4%, MMVU 72.3%, MMMU-Pro 75.1% (card) / 72.7% (AA), CharXiv 77.5%, ExtractBench 88.0% (LlamaIndex) — model cards / AA via BenchLM. Benchable's own battery adds Hallucinations 98.0% and Email Classification 99.0% with 88% run reliability (its 0.0% cells on General Knowledge/Coding/Reasoning are harness non-runs, not measurements).

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench 89.2% is frontier-leaning tool calling, with BrowseComp 61% and OSWorld-Verified 54.5% adding browsing/computer-use evidence; capped by Terminal-Bench 2.0 40.5%, Gert Labs 29.0% and no Tau3/GDPval/Claw numbers.
- **Reasoning: 80/100.** GPQA Diamond 84.2–84.5% and MMLU-Pro 85.3% are strong knowledge/science results for a 3B-active MoE, and AA-LCR 72.0% is competent long-context reasoning; capped by HLE 21.0%, AA Intelligence Index 19.3% (low-mid), CritPt 0.9% and the 85.4% hallucination rate.
- **Context window: 78/100.** 262,144 native lands in the 200K–500K tier (65–84, above the 200K=70 floor); AA-LCR 72.0% is mid-band and the ~1M YaRN extension is static-factor.
- **Multimodal: 88/100.** Native text, image and video input (video-in tier 75–90) with text-only output; MMMU 81.4%, MMVU 72.3%, CharXiv 77.5% and ExtractBench 88.0% are excellent for a 3B-active model; no audio input or non-text output.
- **Coding: 72/100.** SWE-bench Verified 69.2% and LiveCodeBench v6 74.6% are mid-band agentic coding; capped by Terminal-Bench 2.0 40.5%, SWE-Rebench 53.7% and no SWE-bench Pro/SciCode/DeepSWE numbers.
- **Cost efficiency: 93/100.** $0.14/$1.00 with $0.05 cache (and a $0.065/$0.75 route) sits near the ~$0.60/$2.20 ≈ 92 band on the cheaper side; Apache 2.0 weights (free self-host at 78+ tok/s) hold the floor at $0.
- **Overall Score: 79/100.** Mean of (78 + 80 + 78 + 88 + 72) / 5 = 79.2 → 79. Best fit: the cheap open-weight vision-language MoE for multilingual multimodal agents at a 3B-active serving cost — knowledge-depth and hardest-agentic gaps keep it below the bigger Qwen3.5 members.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Qwen3.5-35B-A3B model card + Artificial Analysis figures via BenchLM, Benchable endpoint/pricing record, LLM Reference, techie007); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
