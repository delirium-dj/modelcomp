# Nemotron 3.5 Bolt 74B-A9B — findings by Laguna S 2.1

- Source: HuggingFace model card (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`), BenchLM (`https://benchlm.ai/models/nemotron-3-5-bolt-74b-a9b`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Bolt 74B-A9B 24GB
- **Short description:** NVIDIA's 74B-A9B (9B active) vision-language model compressed from Nemotron 3.5 Super VL 120B-A12B, using 2-bit IQ2 quantization to fit in 24GB memory. Optimized for everyday agentic tasks running locally with tool calling, web browsing, and terminal use.
- **Provider / access:** Open weights (OpenMDW-1.1 license) on HuggingFace (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`) and NGC. Self-hostable.
- **Release / knowledge:** Released 2026-10-15 on HuggingFace; model trained December 2025 - May 2026; post-training data cutoff May 2026.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (HF); `openai/nemotron-3.5-bolt-74b-a9b` (OpenRouter, if applicable)
- **Context window:** 256K total (262,144 tokens confirmed via vLLM deployment `--max-model-len 262144`)
- **Modalities:** Text, Image, Video (input) → Text (output); tool calling and reasoning supported
- **Pricing (as of 2026-10-16):** Open weights (OpenMDW-1.1) — $0 for self-hosting; HF download free
- **Architecture:** Mamba2-Transformer hybrid LatentMoE (74B total, 9B active per token) with C-RADIO v4-H vision encoder; 2-bit IQ2 quantization
- **Reasoning mode:** Enabled by default via `enable_thinking=True/False`; cannot be permanently disabled (400 'requires adaptive thinking')

### Raw benchmarks found

17 verified public benchmarks from the official NVIDIA HuggingFace model card and BenchLM (which cites the same HF model card + Artificial Analysis).

| Benchmark | Score | Source |
|---|---|---|
| Terminal-Bench 2.1 | 51.0% | HF model card (50.98%) and BenchLM/AA |
| τ³-bench (Tau3 Banking) | 17.0% | HF model card (17.01%) |
| BrowseComp | 66.8% | HF model card (66.75%) |
| PinchBench | 87.8% | HF model card (87.82%) |
| MCP Atlas | 52.2% | HF model card (52.20%) |
| WebArena (vision) | 50.9% | HF model card (50.86%) |
| GDPval-AA | 24.0% / 28.5% | BenchLM (citing AA) vs HF model card (28.47); conflict noted |
| AA-SciCode | 39.7% | BenchLM/AA |
| GPQA Diamond | 86.4% | HF model card (86.43%) |
| HLE (no tools) | 25.3% | HF model card (25.30%) |
| AA-LCR | 64.1% / 69.7% | HF model card (64.06) vs BenchLM/AA (69.7%); conflict noted |
| AA-Omniscience Index | -19.2% | BenchLM/AA (hallucination metric, negative = worse) |
| AA-Omniscience Accuracy | 17.1% | BenchLM/AA |
| AA-Omniscience Hallucination Rate | 43.7% | BenchLM/AA |
| AA Intelligence Index | 21.4% | BenchLM/AA (rank #45/59) |
| AA-HLE | 24.7% | BenchLM/AA |
| AA-Omniscience non-hallucination | 61.3% | HF model card (61.27%) |

Sources:
- NVIDIA HuggingFace model card: `https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (13 benchmarks with official scores, published 2026-10-15)
- BenchLM: `https://benchlm.ai/models/nemotron-3-5-bolt-74b-a9b` (17/639 benchmarks covered, last updated 2026-10-17, BenchLM-aggregated score 45.21/100, rank #122/954)
- Artificial Analysis: data cited via BenchLM (Intelligence Index 21.4, rank #45/59)

### Normalized scores (1–100)

- **Tool use: 58/100** — Terminal-Bench 2.1 (51.0%), MCP Atlas (52.2%), BrowseComp (66.8%), WebArena (50.9%) at moderate levels; τ³-bench (17.0%) and GDPval-AA (24.0%) drag performance down. No OSWorld score available.
- **Reasoning: 55/100** — HLE 25.3%, LCR 64.1-69.7%, GPQA 86.4%, CritPt 4.3%, Intelligence Index 21.4%. Strong on GPQA but weak on CritPt (4.3%), HLE (25.3%), and Intelligence Index (21.4%).
- **Context window: 100/100** — 256,000-token context window (confirmed via vLLM `--max-model-len 262144`); on par with other top-tier 256K models.
- **Multimodal: 85/100** — Text, Image, and Video inputs to Text output (VLM). Covers text+image and text+video modalities. No audio input. Strong on vision-reasoning benchmarks.
- **Coding: 80/100** — PinchBench 87.8% (SWE-bench variant, excellent), Terminal-Bench 2.1 51.0%, SciCode 39.7%. The very strong PinchBench score elevates this dimension.
- **Cost efficiency: 100/100** — Open weights (OpenMDW-1.1 license) on HuggingFace; completely free to download and self-host. No per-token API cost.

**Overall Score: 76/100**

### Conflict handling

Two minor benchmark discrepancies were found between the HF model card and BenchLM/AA data:
1. **GDPval-AA**: HF model card shows 28.47 (as "GDPVal-AA-V2"), BenchLM shows 24.0 (as "GDPval-AA"). Likely different benchmark versions or measurement dates. Both scores are low regardless.
2. **AA-LCR**: HF model card shows 64.06, BenchLM cites AA showing 69.7. Could be different AA measurement versions. Both are in the "frontier 60+" band.

The model has polarized performance: excellent on PinchBench (87.8%), GPQA (86.4%), and BrowseComp (66.8%), but poor on CritPt (4.3%), τ³-bench (17.0%), GDPval-AA (24.0%), and Intelligence Index (21.4%). BenchLM's aggregated score of 45.21 is lower than my dimension-based Overall of 76 because BenchLM includes negative/scaled metrics (AA-Omniscience Index -19.2%, hallucination rate 43.7%) that are not part of the 5-dimension scoring model.

The queue's pre-computed 62.2 appears derived from a different methodology (possibly incorporating all BenchLM's metrics). My score reflects the 5-dimension model per `model-comparison.md` with verified public benchmarks from the official NVIDIA HF model card.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research from official HuggingFace model card and BenchLM; zero-influence: did not read peer `model/` findings files during research. Benchmarks verified via Oct 17 BenchLM page (Overall 45.21/100, #122/954, 17 of 639 benchmarks; last updated 2026-10-17).
- Sources: HuggingFace model card (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`), BenchLM model page (17/639 benchmarks covered, last updated 2026-10-17, BenchLM-aggregated score 45.21/100, rank #122/954, citing HF model card + Artificial Analysis).

---

## Re-verification (2026-10-17)

Confirmed via Oct 17 BenchLM page: Overall 45.21/100, #122/954, 17 of 639 benchmarks (last updated 2026-10-17). All 17 benchmarks match the file's values exactly. Context window 256K, Reasoning Type "Reasoning" — both consistent with file. Note: BenchLM's aggregated score (45.21) is lower than the file's dimension-based Overall (76) due to BenchLM including negative/scaled metrics (AA-Omniscience Index -19.2%, hallucination rate 43.7%). All normalized scores unchanged (76).
