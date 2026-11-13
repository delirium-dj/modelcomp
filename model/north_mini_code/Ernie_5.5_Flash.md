# North Mini Code — findings by Ernie 5.5 Flash

- Source: Cohere/Cohere Labs North Mini Code (`north_mini_code`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code (Cohere's first developer model; open-weights research release)
- **Short description:** Cohere Labs' 30B-A3B open-weights code/agent model (released 2026-06-09) optimized for code generation, agentic software engineering and terminal tasks, with interleaved thinking and native tool use.
- **Provider / access:** Open weights `CohereLabs/North-Mini-Code-1.0` on Hugging Face (Apache 2.0); vLLM / SGLang / transformers local serving; OpenCode integration; hosted HF Space.
- **Release / knowledge:** 2026-06-09 (blog); knowledge cutoff not published.
- **IDs:** `north_mini_code` (dataset), `CohereLabs/North-Mini-Code-1.0` (HF), `North-Mini-Code-1.0` (OpenCode config).
- **Context window:** 262,144 tokens (256K); max output 65,536 (64K).
- **Modalities:** text in / text out; reasoning with interleaved thinking; native tool calls (JSON-schema tools, cohere_command4 parsers); structured output.
- **Pricing (as of 2026-11-13):** $0 per token — Apache 2.0 open weights; local inference free.
- **Architecture:** decoder-only sparse MoE, 30B total / 3B active, 128 experts (8 active), SwiGLU FFN, sigmoid router, interleaved sliding-window RoPE attention : global attention 3:1, one dense layer before sparse layers; two-stage cascaded SFT + RLVR post-training focused on agentic coding.

### Raw benchmarks found

> HF eval-results rows (SWE-bench Verified 67.6, SWE-bench Pro 40.2, Terminal-Bench 2.0 36) plus independent Artificial Analysis rows (via BenchLM): tau2-bench 37.4%, GDPval-AA 0.0%, AA-SciCode 38.8%, AA-LCR 37.3%, CritPt 0.3%, GPQA Diamond 75.7%, HLE 11.1%, AA-Omniscience index −49.8 (accuracy 18.4%, hallucination 83.5%), AA Intelligence Index 3.4, IFBench 57.6%.

Agent / tool use:

- Terminal-Bench 2.0: **36** (HF eval-results)
- Tau2-Bench: **37.4%** (AA); GDPval-AA: **0.0%** (AA — floor)
- Tool calling native (bash-style tools, interleaved thinking) documented; no Claw-Eval/Toolathon row

Reasoning / knowledge:

- AA Intelligence Index: **3.4** (AA — very low)
- GPQA Diamond: **75.7%** (AA); HLE: **11.1%**; CritPt: **0.3%**
- AA-Omniscience: accuracy **18.4%**, hallucination **83.5%**, index **−49.8** — the model's worst profile
- IFBench: **57.6%**; AA-LCR: **37.3%**

Coding:

- SWE-bench Verified: **67.6%** (HF eval-results)
- SWE-bench Pro: **40.2%** (HF eval-results)
- AA-SciCode: **38.8%** (AA)
- LiveCodeBench / DeepSWE: no verified public score found

Long context:

- 256K with AA-LCR 37.3% — mid; no MRCR/GraphWalks row.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.0 = 36 and tau2-bench 37.4% are modest; GDPval-AA 0.0% is a floor. The native tool-calling + interleaved-thinking design is real but the measured rows are mid/low for an agentic coding model.
- **Reasoning: 55/100.** GPQA 75.7% is decent for 3B-active, but the AA Index of 3.4, HLE 11.1%, CritPt 0.3% and the −49.8 Omniscience index (83.5% hallucination) are bottom-tier. Capped by the hallucination profile.
- **Context window: 85/100.** 256K — tier 200K–500K band; AA-LCR 37.3% is weak, keeping it at the bottom of the band.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 75/100.** SWE-bench Verified 67.6% and SWE-bench Pro 40.2% are genuinely useful 30B-A3B coding rows (beats the 9B distill on SWE-Pro); SciCode 38.8% and the GDPval floor cap it below the coding frontier.
- **Cost efficiency: 100/100.** $0 — Apache 2.0 weights runnable on a single 30B-class GPU.
- **Overall Score: 59.0/100.** Best fit for private, self-hosted agentic coding and terminal automation where open weights and a 3B-active footprint matter; the hallucination profile and mid-pack agentic rows keep it out of the top band.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (CohereLabs/North-Mini-Code-1.0 Hugging Face model card + HF eval-results rows, BenchLM evidence rows sourced from Artificial Analysis, Cohere Labs blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [CohereLabs/North-Mini-Code-1.0 — Hugging Face model card (eval-results rows)](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)
  - [North Mini Code — BenchLM (12 evidence rows)](https://benchlm.ai/models/north-mini-code)
  - [Introducing North Mini Code — Cohere Labs blog](https://huggingface.co/blog/CohereLabs/introducing-north-mini-code)
  - [North Mini Code — Artificial Analysis](https://artificialanalysis.ai/models/north-mini-code)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.