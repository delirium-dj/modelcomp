# GLM-5.3-Flash — findings by GPT 6 Sol

- Source: Z.AI (`glm-5.3-flash`; weights `zai-org/GLM-5.3-Flash`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.AI's MIT-licensed hybrid sparse/linear-attention multimodal MoE for economical vision-aware agents and coding. A distinct `glm-5.3-flashx` route emphasizes throughput and is not this benchmarked model; anonymous `ox-alpha` was a pre-release test name, not another source to double-count ([Z.AI docs](https://docs.z.ai/guides/llm/glm-5.3-flash)).
- **Provider / access:** Z.AI OpenAI-compatible Chat Completions `glm-5.3-flash` on `https://api.z.ai/api/coding/paas/v4` ([Pi Z.AI](https://pi.dev/models/zai/glm-5-3-flash)); [paid Zen `opencode/glm-5.3-flash`](https://pi.dev/models/opencode/glm-5-3-flash) via Chat Completions at `https://opencode.ai/zen/v1`; [open weights](https://huggingface.co/zai-org/GLM-5.3-Flash) for self-hosting.
- **Release / knowledge:** August 26, 2026 per [AA](https://artificialanalysis.ai/models/glm-5-3-flash) and [Vals](https://www.vals.ai/models/zai_glm-5.3-flash); cutoff not independently disclosed.
- **IDs:** `glm-5.3-flash` first-party, `opencode/glm-5.3-flash` Zen, `z-ai/glm-5.3-flash` OpenRouter, `zai-org/GLM-5.3-Flash` weights. No separate verified Zen Free ID; the local $0/204K/text-only placeholders conflict with current provider/vendor specifications.
- **Context window:** **1,000,000 total** and **128K/131,072 output** ([Z.AI docs](https://docs.z.ai/guides/llm/glm-5.3-flash), [Zen catalog](https://pi.dev/models/opencode/glm-5-3-flash)); provider-specific settings should be checked before assuming all 1M is available in a request.
- **Modalities:** Z.AI API accepts text/image/video/file input, text output ([Z.AI docs](https://docs.z.ai/guides/llm/glm-5.3-flash)); Zen and AA's assessed gateway advertise text/image in. Native audio input and non-text output not established; tool-assisted media processing is distinct from native audio understanding.
- **Pricing (as of 2026-10-12):** [Zen](https://pi.dev/models/opencode/glm-5-3-flash) and [Pi Z.AI](https://pi.dev/models/zai/glm-5-3-flash) list **$0.15 input / $0.50 output / $0.03 cached input** per 1M; [Vals](https://www.vals.ai/models/zai_glm-5.3-flash) measured a **$0.07/$0.25** discounted Z.AI route. Treat the different provider/discount rate as conditional, not an always-free model.
- **Architecture:** [Z.AI official documentation](https://docs.z.ai/guides/llm/glm-5.3-flash) and [MIT weights](https://huggingface.co/zai-org/GLM-5.3-Flash) specify ~320B total/18B active, hybrid linear/sparse attention plus mHC; HF rounds total to 321B depending on counting.

### Raw benchmarks found

Compared [Z.AI's model documentation/benchmark methods](https://docs.z.ai/guides/llm/glm-5.3-flash), [HF model card](https://huggingface.co/zai-org/GLM-5.3-Flash) with independent [Vals](https://www.vals.ai/models/zai_glm-5.3-flash), [AA](https://artificialanalysis.ai/models/glm-5-3-flash) and [Proximal](https://www.frontierswe.com/). [BenchLM's attributed rows](https://benchlm.ai/models/glm-5-3-flash) index the linked source measurements, not a separate experiment. Z.AI's TB2.1 harness differs sharply from Vals' result.

Agent / tool use:

- [Z.AI/HF Terminal-Bench 2.1 **84.3%**](https://huggingface.co/zai-org/GLM-5.3-Flash) (Claude Code 2.1.207, six-hour timeout per card), Toolathlon-Verified **78.4%**, AutomationBench v1.0.6 **48.8%** ([attributed primary rows](https://benchlm.ai/models/glm-5-3-flash)); independent [Vals TB2.1 **62.92% ±2.25**](https://www.vals.ai/models/zai_glm-5.3-flash), [AA TB4.0 **32.8%**](https://benchlm.ai/models/glm-5-3-flash).
- [AA τ³-Banking **47.2%**, AutomationBench-AA **60.4%**](https://benchlm.ai/models/glm-5-3-flash), [GDPval-AA v2 **1773 Elo**](https://benchlm.ai/models/glm-5-3-flash) attributed to Z.AI/AA. [Vals SRE Bench **0.76%**, CyberBench **67.86%**, Finance Agent **57.85%**](https://www.vals.ai/models/zai_glm-5.3-flash); different domains yield markedly different reliability. Exact Claw-Eval: no verified score found.

Reasoning / knowledge:

- [AA GPQA **91.2%**, HLE **39.9%**, CritPt **15.4%**, revised Index **42**](https://benchlm.ai/models/glm-5-3-flash) versus earlier Z.AI-reported AA v4.1.1 Index **57** at a promotional cost per task ([Z.AI docs](https://docs.z.ai/guides/llm/glm-5.3-flash)); index versions cannot be interpreted as a raw performance decline.
- [Vals GPQA **86.36%**, MMLU Pro **86.06%**, ProofBench **21.00%**](https://www.vals.ai/models/zai_glm-5.3-flash) on independent harnesses. No verified exact model ARC-AGI score in the consulted primary pages.

Coding:

- [Z.AI DeepSWE v1.1 **63.4%**, NL2Repo **56.3%**](https://benchlm.ai/models/glm-5-3-flash); [Vals SWE-bench **92.00%**, LiveCodeBench **80.51%**, Vibe Code **30.76%**, Code Migration **20.52%**](https://www.vals.ai/models/zai_glm-5.3-flash).
- [Proximal FrontierSWE v2 **18.1% mean@5**](https://www.frontierswe.com/) on 34 ultra-long engineering tasks, [AA SciCode **51.6%**](https://benchlm.ai/models/glm-5-3-flash). Strong SWE Verified does not automatically imply the same performance on extended coding agents.

Long context / multimodal:

- Z.AI claims hybrid attention improves long-context serving; [AA-LCR **80.0%**](https://benchlm.ai/models/glm-5-3-flash) is a reasoning evaluation, not verified 1M retrieval. No sourced ≥98% MRCR near 1M found.
- [Z.AI CharXiv **89.4%**, MMVU **80.5%**, OfficeQA Pro **62.4%**](https://benchlm.ai/models/glm-5-3-flash); independent [Vals MMMU Pro **86.01%**](https://www.vals.ai/models/zai_glm-5.3-flash). First-party video/files cannot automatically be assumed on the narrower Zen route.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 63–84%, τ³ 47.2% and Toolathlon 78.4% support practical tool use; SRE 0.76%, harness gap and AA TB4 32.8% cap reliability.
- **Reasoning: 82/100.** AA GPQA 91.2%, HLE 39.9% and Index 42 show strong open-weights intelligence; independent GPQA 86.36% and CritPt 15.4% limit the tier.
- **Context window: 96/100.** 1M native window and 128K out reach the top capacity band; no verified high-window 98% retrieval for 100.
- **Multimodal: 81/100.** Vendor API supports image, video and files with text output and strong CharXiv, but Zen advertises only text/image and no native audio.
- **Coding: 84/100.** SWE 92%, DeepSWE 63.4% and TB2.1 show useful agent coding; Vals Vibe Code 30.76% and FrontierSWE v2 18.1% cap extended work.
- **Cost efficiency: 97/100.** Paid $0.15/$0.50 with $0.03 cached is exceptionally low; discounted $0.07/$0.25 is provider-conditional, not a Zen free tier.
- **Overall Score: 85/100.** (80 + 82 + 96 + 81 + 84) / 5 = 84.6, half-up 85; good affordable vision-assisted coding and tools when tested on the actual provider and harness.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh Z.AI docs/HF weights and method notes cross-checked against Vals, AA, Proximal and provider catalog; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
