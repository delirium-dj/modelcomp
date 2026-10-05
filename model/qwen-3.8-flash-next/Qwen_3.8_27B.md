# Qwen3.8-Flash-Next — findings by Qwen 3.8 27B

- Source: Qwen/Alibaba (`Qwen/Qwen3.8-Flash-Next`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next
- **Short description:** Experimental open-weights preview of the next-generation "Qwen4" architecture from Alibaba's Qwen team: hybrid Gated DeltaNet + Qwen Sparse Attention with 6B activated parameters and n-gram embedding scaling. First open release of the Qwen3.8 generation and the base of the production Qwen3.8-Flash (which adds 1M default context and official built-in tools).
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-Flash-Next` (open weights, BF16, ~180B params on disk); official API via Qwen Cloud (qwencloud.com — production `qwen3.8-flash` variant); HF Inference provider: Featherless AI. OpenAI-compatible Chat Completions API when served via vLLM / SGLang / TokenSpeed.
- **Release / knowledge:** Released August 2026 (official tech report "On the Design of Qwen3.8-Next Architecture: Evaluation, Efficiency, and Training Stability" and blog post, both dated August 2026; HF card last updated ~Aug 27, 2026). Knowledge cutoff not stated in the model card.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (Hugging Face); no OpenCode Zen Free ID verified this pass.
- **Context window:** 262,144 native, extensible to 1,000,000 via documented YaRN/RoPE scaling (verified on the official HF model card; framework override flags documented for vLLM/SGLang/TokenSpeed).
- **Modalities:** text, image, video, PDF in; text out; thinking/reasoning on by default (`enable_thinking`, `preserve_thinking`, `reasoning_effort` xhigh/medium/low); tool calls; structured/JSON output.
- **Pricing (as of 2026-10-05):** Open weights under `qwen-community-1.0` license — free to self-host; Qwen Cloud API per-token pricing not verified this pass.
- **Architecture:** 125B parameters with 6B activated + 51B n-gram embedding + 4B MTP (180B total in BF16); 48 layers; 12×(3×(Gated DeltaNet→MoE)→1×(Qwen Sparse Attention→MoE)); 512 experts with 10 routed + 1 shared activated; open weights.

### Raw benchmarks found

> All language and vision numbers below: official Qwen HF model card, https://huggingface.co/Qwen/Qwen3.8-Flash-Next (verified 2026-10-05). Independent HF evaluation results on the same page: GPQA Diamond 91.7, Deep-SWE 58.7, SWE-bench Pro 62.5, ExtractBench mean 89.88 (FP8 checkpoint).

Agent / tool use:

- Toolathlon Verified (Pass@1): **73.5** (official card, highest of the 5-model group; DeepSeek-V4-Flash-0731 at 70.3)
- CoWorkBench (long-horizon office agent work, in-house): **73.9** (official card; next-best in group 70.7)
- JobBench (professional job tasks): **55.7** (official card; next-best 33.4)
- Agents' Last Exam: **Pass@1 24.3 / Score 51.2** (official card; highest Score in group)
- ClawEval-MM (multimodal tool use, Pass@3 / Average): **64.4 / 60.4** (official card) — ClawProBench: no verified public score found
- OSWorld 2.0 (computer use): **19.4 binary / 52.3 partial** (official card)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (official card + HF eval results; ahead of peers 90.3–91.3)
- HLE: **35.9%** (official card, GPT-4o judged; below Claude-Opus-4.6 (Max) at 40.0)
- IFBench (instruction following): **81.3** (official card)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found

Coding:

- SWE-bench Pro: **62.5%** (official card, Claude Code harness, 256K context; highest of group)
- SWE-bench Multilingual: **81.0%** (official card, mini-SWE-agent harness; highest of group)
- DeepSWE 1.1: **58.7** (official card, Claude Code / mini-SWE-agent harnesses, best across harnesses)
- LiveCodeBench v6: **91.9%** (official card; highest of group)
- NL2Repo-Bench (repo-level code generation): **48.1** (official card; DeepSeek-V4-Flash-0731 at 54.2)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval (MRCR/RULER) value reported for this exact model; native 262,144 with documented 1M YaRN extension per the official card.

### Normalized scores (1–100)

- **Tool use: 85/100.** Toolathlon Verified 73.5 (group-best) plus CoWorkBench 73.9 and JobBench 55.7; no TB2.1 figure found and OSWorld binary 19.4 caps it short of the 90+ frontier tier.
- **Reasoning: 88/100.** GPQA Diamond 91.7 is frontier-tier (official card + independent HF eval), but HLE 35.9 trails Claude-Opus-4.6's 40.0 and no AA Intelligence Index is published.
- **Context window: 82/100.** Native 256K sits at the top of the 200K–500K band (65–84); 1M is documented via YaRN override, with no verified long-context retrieval measurement this pass.
- **Multimodal: 85/100.** Image and video in with strong vision numbers (MathVision 95.7 with CI, RealWorldQA 88.5, LVBench 76.6, AndroidWorld 84.5); text-only output.
- **Coding: 84/100.** LiveCodeBench v6 91.9 and SWE-bench Pro 62.5 lead their groups, but DeepSWE 58.7 stays below the 74%+ frontier reference.
- **Cost efficiency: 80/100.** Open weights free to self-host, but no OpenCode Zen Free ID is verified and Qwen Cloud per-token pricing was not verified this pass, so it is not scored at the $0 tier.
- **Overall Score: 85/100.** (85 + 88 + 82 + 85 + 84) / 5 = 84.8 → 85; best-fit for open-weights long-context agentic work where the production Qwen3.8-Flash tier is not required.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b:free)** — 2026-10-05
- Method: public internet research (official Hugging Face model card and its evaluation-results section); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
