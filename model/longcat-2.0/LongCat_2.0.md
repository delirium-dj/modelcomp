# LongCat 2.0 — Verified Findings

**Model ID:** meituan/longcat-2.0
**Developer:** Meituan LongCat Team
**Release Date:** July 2026 (model card updated Jul 8, 2026)
**License:** MIT (weights), MIT (code)

---

## Architecture

- **Type:** Mixture-of-Experts (MoE) language model
- **Total Parameters:** 1.6 trillion (1.6T)
- **Activated Parameters per Token:** ~48 billion (A48B)
- **N-gram Embedding:** 135B parameters (inherited from LongCat-Flash-Lite)
- **Attention:** LongCat Sparse Attention (LSA) — hardware-algorithm co-designed
  - Streaming-aware Indexing (SI): coalesced HBM access via hardware-aligned contiguous layouts
  - Cross-Layer Indexing (CLI): amortizes indexing cost across consecutive layers via cross-layer distillation
  - Hierarchical Indexing (HI): coarse-to-fine two-stage scoring (block-level recall → fine-grained selection)
- **Context Window:** 1,000,000 tokens (trained on hundreds of billions of 1M-context tokens)
- **Training Data:** 35+ trillion tokens
- **Training Hardware:** AI ASIC superpods (millions of accelerator-days, no rollbacks/irrecoverable loss spikes)
- **Tokenizer:** LongcatCausalLM (custom, trust_remote_code=True required)

---

## Key Innovations

1. **LongCat Sparse Attention (LSA)** — addresses DSA's O(L²) scoring bottleneck and discontinuous memory access
2. **N-gram Embedding** — expands parameters in sparse dimensions orthogonal to MoE (135B params), improving utilization efficiency
3. **1M-context training** — hundreds of billions of tokens at 1M context length for long-horizon tasks
4. **AI ASIC superpod training** — demonstrates frontier-scale training on alternative hardware

---

## Official Benchmarks (from model card, measured in-house unless noted with *)

### Code Agent
- **Terminal-Bench 2.1:** 70.8
- **SWE-bench Pro:** 59.5
- **SWE-bench Multilingual:** 77.3

### General Agent
- **FORTE:** 73.2
- **BrowseComp:** 79.9
- **RWSearch:** 78.8

### Foundational
- **IFEval:** 90.0
- **Writing Bench:** 83.8
- **IMO-AnswerBench:** 81.8
- **GPQA-diamond:** 88.9

### Comparison with Proprietary Models (from model card)
| Benchmark | LongCat-2.0 | Gemini 3.1 Pro* | GPT-5.5* | Claude Opus 4.6* | Claude Opus 4.7* | Claude Opus 4.8* |
|-----------|-------------|-----------------|----------|------------------|------------------|------------------|
| Terminal-Bench 2.1 | 70.8 | 70.7 | 73.8 | — | 71.7 | 78.9 |
| SWE-bench Pro | 59.5 | 54.2 | 58.6 | 57.3 | 64.3 | 69.2 |
| SWE-bench Multilingual | 77.3 | 76.9 | — | 77.8 | 80.5 | 84.8 |
| FORTE | 73.2 | 70.3 | 77.8 | 73.2 | 77.6 | 77.2 |
| BrowseComp | 79.9 | 85.9 | 84.4 | 84.0 | 79.3 | 84.3 |
| RWSearch | 78.8 | 76.3 | 85.3 | 81.3 | 79.3 | 77.3 |
| IFEval | 90.0 | 96.1 | 95.0 | 92.2 | 88.7 | 86.0 |
| Writing Bench | 83.8 | 83.7 | 84.7 | — | 85.3 | 85.2 |
| IMO-AnswerBench | 81.8 | 90.0 | 79.5 | 75.3 | 81.8 | 75.3 |
| GPQA-diamond | 88.9 | 94.3 | 93.6 | 91.3 | 94.2 | 92.4 |

* = cited from model's official report; — = no comparable public score

---

## Deployment & Integration

- **Chat Website:** https://longcat.ai/
- **Tech Blog:** https://longcat.chat/blog/longcat-2.0/
- **Hugging Face:** https://huggingface.co/meituan-longcat/LongCat-2.0
- **ModelScope:** https://www.modelscope.cn/models/meituan-longcat/LongCat-2.0
- **GitHub:** https://github.com/meituan-longcat/LongCat-2.0 (569 stars, 71 forks)
- **OpenRouter:** https://openrouter.ai/meituan/longcat-2.0
- **GPU Deployment:** SGLang cookbook (https://docs.sglang.io/cookbook/autoregressive/Meituan/LongCat-2.0)
- **NPU Deployment:** SGLang-FluentLLM (https://github.com/meituan-longcat/SGLang-FluentLLM)
- **Quantizations Available:** FP8, INT8, 3-bit, 4-bit, 2-bit, NVFP4, MLX 4-bit (via community)

---

## Harness Integration

Deeply integrated with:
- Claude Code
- OpenClaw
- Hermes

Strong performance on: code understanding, repository-level edits, automated task execution, agentic workflows.

---

## Pricing (LongCat API)

- Input: $0.30 / 1M tokens
- Output: $1.20 / 1M tokens
- Cached input: $0.006 / 1M tokens

---

## Usage Considerations

- Model weights released under MIT License
- Not comprehensively evaluated for every downstream application
- Performance varies across languages
- Self-hosting 1.6T MoE requires serious infrastructure (multi-node GPU/NPU clusters)
- Requires `trust_remote_code=True` for Transformers loading (custom LongcatCausalLM architecture)

---

## Contact

- Email: longcat-team@meituan.com
- Discord: https://discord.com/invite/jmuv5TQzKU
- Twitter/X: https://x.com/Meituan_LongCat
- WeChat: See GitHub repo for QR codes

---

## Sources (Verified)

1. **Official Model Card:** https://huggingface.co/meituan-longcat/LongCat-2.0 (accessed 2026-10-20)
2. **GitHub Repository:** https://github.com/meituan-longcat/LongCat-2.0 (accessed 2026-10-20)
3. **Technical Paper (LSA):** arXiv:2608.01662 "LongCat Sparse Attention: Taming the Lightning via Streaming-aware Hierarchical Cross-Layer Indexing" (Zan et al., 2026)
4. **OpenRouter API Docs:** https://openrouter.ai/meituan/longcat-2.0 (accessed 2026-10-20)
5. **Hugging Face Model Hub Search:** https://huggingface.co/models?search=LongCat+2.0 (shows 14 variants including FP8, INT8, quantized versions)
6. **arXiv References citing LongCat-2.0:** arXiv:2609.37807 (CompOrca), arXiv:2608.04502 (AFD-Ledger), arXiv:2610.25550 (NCE framework)

---

## Conflicts / Notes

- **Model card benchmarks are in-house** (not independently replicated) — marked with methodology note
- **Proprietary model comparisons** use cited official reports (*) — not head-to-head under same harness
- **Pricing** is for LongCat API (hosted); self-hosted cost depends entirely on infrastructure
- **No multimodal capabilities** — text-only model despite "LongCat-Video-Avatar" being a separate video generation model line
- **Overall score of 70.4** in model-queue.md appears to be derived from peer-model ratings, not direct benchmark aggregation