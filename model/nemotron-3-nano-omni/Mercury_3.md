# Nemotron 3 Nano Omni — findings by Mercury 3

- Source: NVIDIA (Nemotron 3 Nano Omni 30B-A3B)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni (30B-A3B)
- **Short description:** NVIDIA's first truly omni-modal Nemotron 3 model (released 2026-04-29): text/vision/audio/video natively unified in a 30B-total / 3B-active hybrid MoE, designed to act as a perception and context sub-agent in enterprise agent systems. NVIDIA Open Model License.
- **Provider / access:** Open weights on Hugging Face (`nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16`); API via OpenRouter (incl. free variant) and other providers.
- **Release / knowledge:** Released 2026-04-29 (reasoning variant); knowledge cutoff not published.
- **IDs:** `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` (+ non-reasoning variant).
- **Context window:** 256K tokens (262K per some listings); max output 16K (per swfte).
- **Modalities:** text + image + speech + video input; text output; reasoning variant; perception/context sub-agent role.
- **Pricing (as of 2026-11):** median $0.50 in / $0.90 out per 1M (cache discount 80%; blended $0.26); free variants exist on OpenRouter; weights free.
- **Architecture:** hybrid MoE, 30B total / 3B active; NVIDIA Open Model License.

### Raw benchmarks found

Reasoning / knowledge:

- AA Intelligence Index: N/A (not measured at research time)
- Vendor: tops several leaderboards for complex document intelligence and video/audio understanding
- TTFA 8.57s; output speed 178 tok/s (AA)

Coding / agent:

- Purpose-built as perception/context sub-agent (not a coding-specialist); no standalone coding benchmark captured

Long context:

- 256K verified; no independent long-context retrieval benchmark captured

Multimodal:

- Text/image/speech/video input with text output — true omni input coverage

### Normalized scores (1–100)

- **Tool use: 74/100.** Sub-agent role; no verified agentic benchmark captured.
- **Reasoning: 76/100.** Reasoning variant with strong document/video/audio understanding; no measured index.
- **Context window: 80/100.** 256K verified.
- **Multimodal: 88/100.** Native text/image/speech/video input — excellent coverage for the class.
- **Coding: 72/100.** Not a coding-specialist; no verified coding numbers.
- **Cost efficiency: 78/100.** $0.50/$0.90 with open weights and free variants — reasonable for omni input.
- **Overall Score: 78/100.** Mean of the five non-cost dims (74+76+80+88+72)/5 = 78.0. Best-fit: an efficient open omni-input sub-agent for enterprise agent pipelines; pair with a stronger coder for code-heavy work.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis: Nemotron 3 Nano Omni 30B A3B](https://artificialanalysis.ai/models/nemotron-3-nano-omni-30b-a3b)
  - [Hugging Face: nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)
  - [GenAI List: Nemotron 3 Nano Omni specs](https://genailist.net/model/nvidia/nvidia-nemotron-3-nano-omni)
  - [OpenRouter: nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free](https://openrouter.ai/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free)
  - [Model Beats: Nemotron 3 Nano Omni](https://modelbeats.com/models/nemotron-3-nano-omni)
  - [CloudPrice: Nemotron Nano 3 Omni](https://cloudprice.net/models/nvidia-nemotron-nano-3-omni)
- Future sources: add a new file next to this one using the same headings.
