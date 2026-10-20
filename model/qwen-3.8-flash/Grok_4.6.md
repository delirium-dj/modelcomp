# Qwen3.8-Flash — findings by Grok 4.6

- Source: Alibaba / Qwen (`qwen3.8-flash`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash
- **Short description:** Alibaba's hosted Qwen3.8 Flash production SKU (QwenCloud: based on Qwen3.8-Flash-Next): 125B/6B MoE, native 1M context, text/image/video understanding, aimed at cheap agentic coding and office automation. Not the 27B dense sibling.
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud Chat Completions (OpenAI + Anthropic protocols), model ID `qwen3.8-flash`. OpenRouter `qwen/qwen3.8-flash`.
- **Release / knowledge:** Flash-Next weights/eval card on Hugging Face; hosted Flash docs updated through 2026-10-11 (Alibaba help). Knowledge cutoff not stated on the Model Studio page.
- **IDs:** `qwen3.8-flash` (QwenCloud / Model Studio); `qwen/qwen3.8-flash` (OpenRouter); open-weight sibling `Qwen/Qwen3.8-Flash-Next`. No OpenCode Zen Free ID found.
- **Context window:** 1,000,000 total; max input 991,808 (thinking-mode input 983,616); max output 131,072; max chain-of-thought 262,144 (Alibaba Model Studio, 2026-10-11). HF native 262,144 extensible to 1,000,000.
- **Modalities:** Text generation, thinking, function calling, structured output, image understanding, video understanding, context cache, web search (QwenCloud). Text out. No audio I/O listed.
- **Pricing (as of 2026-10-20):** International/Singapore USD $0.15 input / $0.47 output / $0.016 implicit-cache and explicit-cache read / $0.20 explicit-cache create per 1M (OpenRouter matches $0.15/$0.47/$0.016). Other Model Studio regions list $0.113/$0.382 with $0.014 cache read.
- **Architecture:** Causal LM + vision encoder; 125B total / 6B activated MoE plus 51B n-gram embedding and 4B MTP (HF Flash-Next card). Hybrid GDN + Qwen Sparse Attention.

### Raw benchmarks found

Vendor table is **Qwen3.8-Flash-Next** on Hugging Face; QwenCloud presents hosted `qwen3.8-flash` as that Next checkpoint. Independent AA TB 2.1 is labeled **Qwen3.8 Flash**.

Agent / tool use:

- Terminal-Bench 2.1 (Artificial Analysis): **86.1%** (ModelCap AA snapshot 2026-10-15, #13/128, reasoning config)
- CoWorkBench: **73.9** (HF / QwenCloud)
- JobBench: **55.7** (HF / QwenCloud)
- Toolathlon Verified (Pass@1): **73.5** (HF / QwenCloud)
- Agents' Last Exam: Pass@1 **24.3**, Score **51.2** (HF)
- AndroidWorld: **84.5** (QwenCloud highlights)
- Tau3-Banking / Claw-Eval / GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (HF Flash-Next table)
- HLE: **35.9%** (HF; GPT-4o judge)
- Artificial Analysis Intelligence Index: **56** for Qwen3.8-Flash-Next (innfactory compilation of AA); Dataconomy lists **55.8** (AA, 2026-08-27). Hosted Flash page itself is "not yet rated" on some AA mirrors — treat 55.8–56 as Next/Flash-family independent
- AA-LCR: **79.7%** (Dataconomy AA row for Flash-Next)
- AA-SciCode: **50.6%** (Dataconomy AA)
- MathVision: **95.7**; LVBench: **76.6** (QwenCloud)

Coding:

- SWE-bench Pro: **62.5** (HF; Claude Code harness, 256K; vs Opus 4.6 Max 53.4 in the same table)
- DeepSWE 1.1: **58.7** (HF; best of Claude Code / mini-SWE-agent)
- SWE-bench Multilingual: **81.0** (HF; mini-SWE-agent)
- NL2Repo-Bench: **48.1** (HF)
- LiveCodeBench v6: **91.9%** (HF)
- SWE-bench Verified / Vibe: **no verified public score found**

Long context:

- 1M hosted window; native 262K. AA-LCR **79.7%**. **no ≥98% MRCR at 512K+ found**

### Normalized scores (1–100)

- **Tool use: 86/100.** Independent TB 2.1 86.1% is just under the ~88% frontier band; Toolathlon 73.5 and CoWorkBench 73.9 are solid. Capped by JobBench 55.7, ALE pass@1 24.3, and missing Tau3/GDPval.
- **Reasoning: 88/100.** GPQA 91.7% is frontier; HLE 35.9% is near 40%; AA Index ~56 is just shy of 60. Capped by HLE still under 40% and Index not 60+.
- **Context window: 96/100.** Hosted 1M / 131K out is the ≥1M tier. Not 100: LCR 79.7% is not ≥98% at 512K+.
- **Multimodal: 82/100.** Image+video in maps to the +video 75–90 band. Capped by no audio and text-only output.
- **Coding: 87/100.** AA TB 2.1 86.1% and LiveCodeBench 91.9% are high; SWE-Pro 62.5 and SWE-Multilingual 81.0 support. Capped by DeepSWE 58.7 (below 74%) and no SWE-Verified.
- **Cost efficiency: 95/100.** International $0.15/$0.47 sits between ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (~92). Cache reads at $0.016 help. Not 99: still paid, output is 2× the $0.20 cheap-tier analog.
- **Overall Score: 88/100.** Mean of 86 + 88 + 96 + 82 + 87 = 87.8 → 88 half-up. Best fit: cheap hosted multimodal coding/office agents; confirm Next vs hosted Flash if you need an AA Index measured on the exact API ID.

---

## Signature

- Provided by: **Grok 4.6 (xAI / grok-4.6)** — 2026-10-20
- Method: public internet research (QwenCloud, Alibaba Model Studio, HF Qwen3.8-Flash-Next, AA TB 2.1 via ModelCap); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
