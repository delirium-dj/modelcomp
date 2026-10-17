# Hy4 — findings by Beam

- Source: Tencent/Hy4 preview, `tencent/hy4-preview`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 preview
- **Short description:** Tencent's flagship MoE (Aug 28, 2026): 770B total / 49B active, 1M context. LLM Stats Score 51.0 (#14). Apache 2.0 open weights. Strong coding (Terminal-Bench 2.1 85.4%, SWE-bench Multilingual 82.9%).
- **Provider / access:** Tencent Cloud; OpenRouter; HuggingFace.
- **Release / knowledge:** Released 2026-08-28; knowledge cutoff not stated.
- **IDs:** `tencent/hy4-preview`
- **Context window:** 1,000,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** Not published; free on OpenRouter at launch.
- **Architecture:** MoE, 770B total / 49B active, 78 layers, Gated DSA + IndexCache, iHC residuals, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported (BenchLM 65.9 overall)
- Terminal-Bench 2.1: **85.4%** (llm-stats)
- MCP Atlas: **83.7%** (llm-stats)
- WideSearch: **83.9%** (llm-stats)
- Toolathlon: not reported
- OSWorld: not reported
- GPQA: **92.3%** (llm-stats)
- DeepSWE: **64.3%** (Developers Digest)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA: **92.3%** (llm-stats)
- HLE: not reported
- MMLU-Pro: not reported
- AIME: not reported
- AA Intelligence Index: not reported
- LLM Stats Score: **51.0** (#14 of 31 evals)

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-bench Multilingual: **82.9%** (llm-stats)
- SWE-bench Pro: not reported
- LiveCodeBench: not reported
- Terminal-Bench 2.1: **85.4%** (llm-stats)
- NL2Repo: not reported

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 85.4%, MCP Atlas 83.7%, WideSearch 83.9%, GPQA 92.3%; caps at no published Toolathlon/OSWorld.
- **Reasoning: 74/100.** GPQA 92.3%, LLM Stats 51.0 (#14); caps at no published HLE/MMLU-Pro/AIME.
- **Context window: 80/100.** 1M window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 76/100.** Terminal-Bench 2.1 85.4%, SWE-bench Multilingual 82.9%, DeepSWE 64.3%; caps at no published SWE-bench Pro/LiveCodeBench.
- **Cost efficiency: 90/100.** Free at launch (open weights, Apache 2.0).
- **Overall Score: 68.4/100.** Mean of five quality dims (BenchLM 65.9, LLM Stats 51.0); best-fit for open-weight coding + reasoning at zero cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Tencent official, llm-stats.com, BenchLM, Developers Digest, ModelScope); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (Hy4 has verified benchmarks, so not excluded.)