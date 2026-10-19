# Gemma 4 26B-A4B — findings by Mimo v2.6 Flash

- Source: Google DeepMind (`gemma-4.26b-a4b`)
- Date: 2026-10-19 (UTC; original research 2026-10-05, re-researched 2026-10-19)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B-A4B
- **Short description:** Google DeepMind's open MoE (26B total, 3.8B active) multimodal model — mid-tier Gemma 4 with frontier-adjacent math/reasoning scores, 256K context, text/image/video input, aimed at consumer GPUs and workstations.
- **Provider / access:** Open weights (Apache 2.0, Gemma 4 license) via Hugging Face `google/gemma-4` collection and Kaggle; local runtimes llama.cpp / LiteRT-LM (OpenAI-compatible `serve`) / vLLM / SGLang / MLX / Ollama / LM Studio; Google Cloud Vertex Model Garden. Free (open weights).
- **Release / knowledge:** Gemma 4 family released 2026-06-03 (Google Developers Blog launch post + technical report arXiv:2607.02770); knowledge cutoff not published.
- **IDs:** `google/gemma-4-26B-A4B` (pre-trained) and `google/gemma-4-26B-A4B-it` (instruction-tuned), per the Gemma 4 HF collection naming. No OpenCode Zen Free ID found in this research.
- **Context window:** 256K tokens (HF README: small E2B/E4B = 128K, medium 12B / 26B-A4B / 31B = 256K); max output not published; eval thinking budget Nmax = 280K total tokens (light 40K / medium 120K / heavy 280K tiers on related Gemma 4 models).
- **Modalities:** text, image (variable aspect/resolution), video in; **audio input NOT native on 26B-A4B** (native audio only on E2B/E4B/12B — medium sizes use a separate 550M vision encoder); text out; thinking mode with configurable effort; native function calling (tool calls).
- **Pricing (as of 2026-10-05):** free — Apache 2.0 open weights; runs on consumer GPU workstations (quantized checkpoints); paid via cloud endpoint hosts (no verified Zen free ID).
- **Architecture:** MoE decoder-only transformer — 26B total parameters, 3.8B activated per token; hybrid 5:1 local sliding-window / global attention with p-RoPE, KV-cache sharing, keys-as-values in global layers (up to 37.5% smaller global KV cache); 550M-parameter vision encoder (medium tier) feeding raw patches through the shared decoder; autoregressive multi-token prediction (MTP) drafter head for speculative decoding.

### Raw benchmarks found

> Measured numbers with (source, harness) for traceability. Gemma 4 Technical Report (arXiv:2607.02770), greedy decode, thinking on, Nmax=280; 26B-A4B column verified against Table (31B / 26B-A4B / 12B / E4B / E2B) headers.

Agent / tool use:

- MCP Mark / Toolathlon / Tau-bench / OSWorld / Claw-Eval: **no verified public score found**
- τ²-bench: **43.6%** (benchgap measured, 2026-10-18 dataset — first agentic-harness datapoint, ~+7 over the 12B)
- GDPval-AA: **3.3%** (AA measured, fill 2026-10-19)
- Native function calling documented (Gemma 4 `<tool>` formatting); Aider Polyglot 84.6 (tech report)

Reasoning / knowledge:

- GPQA Diamond: **88.7** <(tech report, 26B-A4B column)> — **conflict:** AA-run measures **79.2%** (AA/benchgap measured); both retained
- MMLU-Pro: **82.7** <(tech report)> · **82.6%** (AA measured — independent corroboration); MMLU: 90.4 · BBH: 95.4 <(tech report)>
- AIME: **94.9** · HMMT: 94.9 · Math Olympiad Bench: 92.4 · MGSM: 95.7 <(tech report)>
- HLE: **19.3%** (AA-run measured, benchgap; w/o-tools 8.7%; HLE 17.2% plain measured) — fill 2026-10-19
- Artificial Analysis Intelligence Index: **16.7** (AA measured, fill 2026-10-19 — just below the 20–35 mid band)
- LCR: **65.7%** (AA-LCR measured, fill); CritPt: 0.0% · Omniscience: 19.1% acc (AA measured)

Coding:

- LiveCodeBench: **74.3** <(tech report, 26B-A4B column)>; **v6 77.1%** (benchgap measured — independent corroboration, slightly higher)
- Aider Polyglot: **84.6** <(tech report, 26B-A4B column)>
- AA Coding Index: **39.3** (AA measured, fill 2026-10-19); AA-SciCode: **40.0%** (AA measured)
- SWE-bench Verified (est. 66.0 medium) / SWE-bench Pro (est. 32.8) / terminal-bench / Vibe Code Bench / ReactBench: **no verified public score found** (benchgap estimates not counted as measured)

Long context:

- 256K window documented (medium tier); **MRCRv2: 44.1%** (benchgap measured, fill 2026-10-19 — weak retrieval at window, ~12B parity)

Multimodal (extras):

- MMMU-Pro: **73.2** <(tech report)> · **69.2%** (AA measured) / **73.8%** (benchgap measured) — harness spread noted · MATH-Vision: 80.3 · InfographicVQA: 77.8 · MedXPertQA-MM: 55.7 (tech report) / 60.3% (AA measured) · OmniDocBench: 0.269 (lower better) <(tech report vision Table 12, 26B-A4B column @280K)>
- Audio benchmarks: N/A — 26B-A4B has no native audio input

### Normalized scores (1–100)

- **Tool use: 64/100.** +4 on the first measured agentic datapoint: τ²-bench 43.6% (benchgap) — near the Tau frontier floor (50%+), with Aider Polyglot 84.6 alongside; GDPval-AA 3.3% is weak; still no MCP/Toolathlon/OSWorld/Claw-Eval rows (was 60).
- **Reasoning: 80/100.** −7 on the harness conflict: tech-report GPQA 88.7 / AIME 94.9 are near-frontier, but AA-run GPQA 79.2% and HLE 19.3% (below the ≥30 frontier band) land lower; AA Index 16.7 just misses the mid band while LCR 65.7% is solid and MMLU-Pro 82.6% (AA) independently confirms the tech report (was 87).
- **Context window: 75/100.** −15: MRCRv2 44.1% measured (benchgap) — weak retrieval at the 256K window, negative evidence replacing the earlier none (was 90).
- **Multimodal: 85/100.** Text/image/video in with strong vision scores (MMMU-Pro 73.2 tech report / 69.2–73.8 measured harness spread, MATH-Vision 80.3, InfographicVQA 77.8); no native audio caps below the 90–100 audio tier — unchanged.
- **Coding: 76/100.** LiveCodeBench v6 77.1% (benchgap measured) corroborates and slightly exceeds the tech report's 74.3; AA Coding Index 39.3 and AA-SciCode 40.0% are new mid-band measured fills; no SWE-bench/terminal measured rows — unchanged.
- **Cost efficiency: 98/100.** Free rules apply (Apache 2.0 open weights, quantized checkpoints on consumer GPUs) but no verified OpenCode Zen Free ID was found — unchanged.
- **Overall Score: 76/100.** (64+80+75+85+76)/5 = 76.0 (was 80 — AA harness conflict and weak MRCRv2 pull it −4 despite new fills). Best fit: free mid-size MoE reasoner/multimodal (video in, 256K) for local agents; not a frontier tool-use or SWE pick.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-19
- Method: public internet research (2026-10-19 second pass: benchgap measured/estimate ledger with AA-run harness comparisons — filled τ²-bench/HLE/AA-Index/LCR/GDPval/Coding-Index/MRCRv2 rows and surfaced GPQA harness conflict; plus 2026-10-05 original: Gemma 4 Technical Report arXiv:2607.02770, Gemma 4 model card, HF README, Google Developers Blog) — scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.