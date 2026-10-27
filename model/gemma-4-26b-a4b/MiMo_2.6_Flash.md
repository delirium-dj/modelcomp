# Gemma 4 26B-A4B — findings by MiMo 2.6 Flash

- Source: Google DeepMind `gemma-4-26b-a4b` (API id `gemma-4-26b-a4b-it`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B-A4B (`gemma-4-26b-a4b`, served as `gemma-4-26b-a4b-it`) — the "workstation-tier" Mixture-of-Experts member of Google's Gemma 4 family (31B dense + 26B-A4B workstation; E4B/E2B edge).
- **Short description:** 26B-total / ~4B-active MoE built for inference economics: 128 small experts, 8 active per token plus one shared always-on expert (VentureBeat) — benchmarks near the dense 31B while running "almost as fast as a 4B model". First Gemma family released under **Apache 2.0** (VentureBeat: the license change "may matter more than benchmarks").
- **Provider / access:** Google AI Studio (free tier), 17 API providers incl. DeepInfra, Darkbloom, OpenRouter (`google/gemma-4-26b-a4b-it` + `:free` route); open weights on Hugging Face/ModelScope (official + Unsloth/bartowski GGUFs, MLX); runs 4-bit in 18 GB, 8-bit in 28 GB (Unsloth).
- **Release / knowledge:** 2026-04-02 (llm-stats) / 2026-04-03 (pricepertoken) — family launch week; QAT checkpoints added 2026-06-05, MTP (multi-token prediction) 2026-06-09 (Unsloth changelog). Knowledge cutoff not published.
- **IDs:** `gemma-4-26b-a4b-it` (Google/hosting ids), `deepinfra/google/gemma-4-26B-A4B-it`, `google/gemma-4-26b-a4b-it` (OpenRouter).
- **Context window:** 262,144 tokens (= 256K; pricepertoken exact figure; "256K" in VentureBeat/Unsloth/DeepInfra — same value); max output not separately published.
- **Modalities:** text + image in, text out; native thinking mode, function calling, structured JSON, 140+ languages (Requesty/DeepInfra, latent.space). Audio input belongs to the E-tier edge models only.
- **Pricing (as of 2026-10-27):** free on Google AI Studio; cheapest paid Darkbloom $0.042/$0.180 (cache $0.009); DeepInfra $0.07/$0.34; blended $0.10–0.12 across providers (pricepertoken, DeepInfra). Input price range across 17 providers: $0.042–$0.90.
- **Architecture:** open weights, Apache 2.0; MoE 26B total / ~4B active — **conflict:** llm-stats FAQ says "25.2 billion parameters" and "3.8 billion activated" vs the marketing/Unsloth "26B / A4B" nominal numbers; both reported (rounding of expert counts).

### Raw benchmarks found

Agent / tool use:

- Function calling, JSON mode, agentic-workflow positioning (Requesty/DeepInfra model card); **no Terminal-Bench / GDPval / Tau / Toolathlon figure found** for this model
- BenchLM public ledger: 5 displayable rows (multimodal, knowledge + 3); no agentic lane

Reasoning / knowledge:

- MMLU-Pro (Google official table): **82.6%** (vs 31B 85.2, 12B-Unified 77.2, E4B 69.4, Gemma 3 27B 67.6)
- AIME 2026 no tools (Google official): **88.3%** (vs 31B 89.2) — near-parity with the dense flagship
- GPQA: **71.4** (pricepertoken/AA-sourced, likely non-reasoning mode; 57th percentile) — **conflict:** AA's reasoning-mode figure for the sibling 31B is 85.7%, so mode matters; no reasoning-mode GPQA published for 26B-A4B
- Artificial Analysis Intelligence (composite): **13.1** (54th percentile) (pricepertoken) — small-model class, as expected for a 4B-active model
- Arena AI: **#6 among open models** (llm-stats; latent.space)

Coding:

- LiveCodeBench v6 (Google official): **77.1%** (vs 31B 80.0, 12B 72.0)
- SWE-bench: no verified figure found

Multimodal:

- MMMU-Pro (BenchLM ledger): **73.8%** — strong for its class (sibling 31B: 76.9 per VentureBeat)

Long context:

- 256K window declared; **no MRCR/RULER retrieval figure found.**

Local / quantization (a defining property of this model):

- Stock GGUFs **quantize ~3.3× worse than the dense 31B** at the same level: Q8_0 KL 0.544 / 77.9% top-1 vs 31B's 0.163/92.0; Unsloth's MXFP4_MOE (16.6 GB) beaten by their own UD-Q4_K_XL (17.1 GB) (localbench.substack, pre-QAT measurements)
- QAT checkpoints (2026-06-05) + Unsloth re-conversion fixed a conversion bug, **+15 accuracy points over naive conversion**; 4-bit QAT retains ≈85.6% at ~3× less memory; 193 t/s on a single RTX 4090 (TowardsAI); llama.cpp Q8_0 demo ~300 t/s on M2 Ultra with MCP support (ggerganov via latent.space)

### Normalized scores (1–100)

- **Tool use: 62/100.** Function calling and JSON mode are documented, but no agentic benchmark (Terminal-Bench, GDPval, Tau, Toolathlon) exists for this model — the evidence floor caps it in the low band despite workstation-tier positioning.
- **Reasoning: 74/100.** AIME 2026 88.3 (within 1 point of the dense 31B) and MMLU-Pro 82.6 are excellent for a 4B-active model; but AA's composite Intelligence 13.1 (54th percentile) and GPQA 71.4 (non-reasoning) place it firmly in the small-model class, far below frontier.
- **Context window: 78/100.** 262,144 tokens clears the 256K tier comfortably; no retrieval measurement (MRCR/RULER) exists to justify higher.
- **Multimodal: 76/100.** Native text+image with MMMU-Pro 73.8 (near the 31B's 76.9) — genuinely strong grounded understanding for the size; text-only output and no audio (E-tier exclusive) stop it higher.
- **Coding: 74/100.** LiveCodeBench v6 77.1 approaches the dense flagship (80.0) and beats Gemma 3 27B by a wide margin; no SWE-bench/terminal evidence, and its MoE quants degrade more than dense (3.3× worse KL pre-QAT) which hurts precisely the local-coding use case unless QAT GGUFs are used.
- **Cost efficiency: 92/100.** Free on AI Studio, $0.042–$0.07/$0.18–0.34 across 17 providers, blended ~$0.10, and 4-bit QAT runs in 15–18 GB at 193 t/s on a single consumer GPU — among the best intelligence-per-dollar and intelligence-per-watt of any 2026 release.
- **Overall Score: 73/100.** (62 + 74 + 78 + 76 + 74) / 5 = 72.8 → 73 — best fit: private/local multimodal coding and reasoning on consumer hardware (QAT GGUFs on a 4090/laptop) or high-volume cheap API multimodal tasks; not the pick for agentic tool loops or frontier reasoning.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-27
- Method: public internet research — official Google sources first (Gemma 4 benchmark table via Unsloth's mirror, VentureBeat's launch reporting), then independent benchmark/review sources (BenchLM, pricepertoken, llm-stats, DeepInfra provider review, localbench.substack quantization audit, TowardsAI QAT hands-on, latent.space launch digest, OpenRouter, Requesty, r/unsloth); conflicting parameter counts and GPQA modes are reported side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
