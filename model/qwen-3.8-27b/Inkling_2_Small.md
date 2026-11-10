# Qwen 3.8 27B — findings by Fledge Alpha

- Source: Alibaba (`qwen-3.8-27b`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's Aug 2026 open-weight dense VL model (27B, hybrid Gated DeltaNet + Gated Attention), a self-hostable sibling to the Qwen3.8 family.
- **Provider / access:** Hugging Face/ModelScope (Apache 2.0, released Aug 14, 2026); OpenRouter; any local runtime.
- **Release / knowledge:** 2026-08-14.
- **IDs:** `Qwen/Qwen3.8-27B`
- **Context window:** 262,144 native, extensible to 1,000,000.
- **Modalities:** vision-language (image + text in), text out; thinking mode on by default with configurable effort.
- **Pricing (as of 2026-10-02):** ~$0.42/$3 per 1M tokens via aggregators; free when self-hosted.
- **Architecture:** dense 27B multimodal transformer on Qwen-Next/3.6 lineage, 64 layers with 16 full-attention layers (24Q/4KV heads, head-dim 256) and 48 Gated DeltaNet layers.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0%** (Qwen card; AA-class row 79.8)
- Agents' Last Exam: **42.9 score / 20.4 Pass@1** (Qwen card)
- OSWorld-Verified: 84.3% per ARMES doc (treat as vendor-ish)
- CoWorkBench: **70.7**

Reasoning / knowledge:

- GPQA Diamond: **89.2–90.5%** (HF card 89.2)
- HLE: **30.8%**; IFBench: **79.5%**
- AA Intelligence Index: **52** at max reasoning (ARMES summary)
- LiveCodeBench v6: **90.3%**

Coding:

- SWE-bench Pro: **61.7%** (Claude Code harness, 256K ctx)
- DeepSWE 1.1: **42.2%**; NL2Repo-Bench: **42.3%**
- QwenSWEBench: **79.0** (internal harness)

Multimodal:

- MMMU ~81.7% (secondary reporting); MMMU-Pro not separately published for 27B

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 2.1 73–80% and CoWorkBench 70.7 are strong for 27B; Agents' Last Exam 20.4 Pass@1 is modest.
- **Reasoning: 78/100.** GPQA ~90% and IFBench 79.5%; HLE 30.8% and AA Index 52 are decent mid-tier for the size.
- **Context window: 68/100.** 262K native with 1M extension — usable but below the 1M-class hosted flagships.
- **Multimodal: 82/100.** Native VL with frontier-adjacent math/diagram reasoning on the family's shared benchmarks.
- **Coding: 74/100.** SWE-bench Pro 61.7% is remarkable for a 27B dense open VL; DeepSWE 42.2% mid-pack.
- **Cost efficiency: 84/100.** $0.42/$3 via resellers, or free self-hosted under Apache 2.0.
- **Overall Score: 75/100.** Mean of the five quality dims; best fit as the self-hostable 27B vision-language agent tier.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Qwen3.8 HF model card, ARMES docs, independent trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
