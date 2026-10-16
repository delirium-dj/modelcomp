# Qwen 3.8 27B — findings by Cat Jam

- Source: Alibaba / Qwen 3.8 27B (`opencode/qwen-3.8-27b`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Dense Apache-2.0 vision-language model (27B, 64 layers, hybrid gated DeltaNet + Gated Attention; released Aug 14, 2026). Strong open, cheap, on-device/cloud-capable model with native vision + thinking.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.8-27B`) open weights (Apache 2.0), plus paid hosted APIs (Weights & Biases, DeepInfra, Cerebras, Groq, Nebius; OpenRouter, etc.). Text/image/video in; text out.
- **Release / knowledge:** Released 2026-08-14 (GA). Knowledge cutoff not stated in sampled docs.
- **IDs:** `qwen3.8-27b` (Alibaba), OpenRouter `qwen/qwen3.8-27b`
- **Context window:** Natively 262,144 tokens; extensible to 1M via YaRN (per Qwen docs). LiteLLM/OpenRouter often cap at 262K. Max output 32,768 (huge request outputs possible in ext).
- **Modalities:** Text, image, video in; text out. Thinking mode on by default (reasoning_effort xhigh/medium/low) with `preserve_thinking`; function calling, structured output, prompt caching; possible fine-tuning.
- **Pricing (as of 2026-10-16):** Official/provider pricing ranges widely: cheapest Tenstorrent $0.02 in / $0.50 out (262K context), Darkbloom $0.035/$2.20, DeepInfra $0.40/$3.00, Cerebras $0.99/$1.49 (64K), W&B $0.40/$3.00; Alibaba direct $0.40/$3.00 (per LiteLLM). Hosted Max context reduced on some providers.
- **Architecture:** Dense 27B, 64 layers = 16 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN)); 24 Q / 4 KV heads for full attention (head dim 256), SwiGLU, MTP. RoPE scaling/YaRN extension. Apache 2.0.

### Raw benchmarks found (official model card + AA)

Text performance:

- Terminal-Bench 2.1: **73.0** (vendor, Terminus-2)
- SWE-bench Pro: **61.7** (vendor, Claude Code harness, 256K)
- NL2Repo-Bench: **42.3**
- DeepSWE v1.1: **42.2** (vs Qwen 3.6-27B 13.3)
- QwenSWEBench: **79.0** (internal)
- CoWorkBench: 70.7
- JobBench: 33.4
- Agents' Last Exam (Pass@1 / score): 20.4% / 42.9 (vendor)
- IFBench: **79.5**
- GPQA Diamond: **89.2** (official text; official Hugging Face table says GPQA 89.2? yes)
- HLE: **30.8**
- LiveCodeBench v6: **90.3**

Vision / multimodal:

- OSWorld-Verified: **84.3**
- WebArena-Verified: **64.8**
- AndroidWorld: **81.9**
- RecreationBench: 47.1
- SWE-MM: 38.6
- Vision2Web: 62.9
- MathVision (with CI): 94.6
- BabyVision (with CI): 85.6
- CharXiv RQ (with CI): 90.2
- OmniDocBench 1.5: 91.1
- RealWorldQA: 85.9
- ERQA: 65.5

Independent (AI Analysis):

- AA Intelligence Index (xhigh): **33.7** (AA, #96 of 216)
- AA Coding Index: **68.1** (#96/216? displayed)
- AA Agentic Index: **46.5**
- AA Terminal-Bench 2.1: **79.8%**
- GPQA Diamond (AA): **90.5%**
- HLE (AA): 33.9%
- AA-LCR: 82.0%
- τ-bench banking: 48.0%
- GDPval-AA: **46.0%** (AA measured)
- CritPt: **5.4%**
- SciCode: **46.6%**
- Terminal-Bench 4.0: 5.6%
- Omniscience Accuracy: 15.6% (non-hall 69.7%)
- SWE-bench Pro (AA?) vs Qubrid 61.7.
- ExtractBench (LlamaIndex, FP8): mean 89.75, Short 94.68, Medium 87.54

Context:

- 262,144 native (per model card), 1M ext via YaRN; AA and vendor mostly cite 262K.

### Normalized scores (1–100)

- **Tool use: 80/100.** AA Agentic Index 46.5, TB2.1 Qwen 73–79.8, OSWorld 84.3, SWE-MM 38.6; Vals independent generally lower on coding harness; Tool use error caps.
- **Reasoning: 82/100.** HLE 30.8–33.9, GPQA 89.2–90.5, AA Index 33.7, LCR 82.0, CritPt 5.4 caps.
- **Context window: 84/100.** Native 262K (AA context extension claims 1M but native max 262K); LCR 82.0, but not full 1M reliable because official guidance says native 262K and YaRN required. Cap.
- **Multimodal: 86/100.** Strong native vision: CharXiv with CI 90.2, MathVision 94.6, OmniDocBench 91.1, OSWorld 84.3; no audio/video documentation found, but Qwen docs mention video. Great multimodal generalization.
- **Coding: 84/100.** TB2.1 73.0, SWE-Pro 61.7, DeepSWE 42.2, LCB V6 90.3, ExtractBench 89.75. Competitive 27B, behind large flagships.
- **Cost efficiency: 92/100.** Hosted $0.40–$0.99/$1.49–$3.00 per 1M, cache 0.03–0.15; Apache-2.0 self-host at ~172GB FP8; excellent price/value for 27B dense. Cheapest route is Tenstorrent $0.02/$0.50 but 262K only.
- **Overall Score: 83.2/100.** Mean (80+82+84+86+84)/5 = 83.2. Strong open dense 27B with multimodal and moderate reasoning; AA Intelligence Index 33.7; queue overall likely higher due to other raters?

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (HF model card, Qwen blog, Alibaba docs, Qubrid, OpenRouter, ctrlaltdebrief); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
