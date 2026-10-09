# Mistral Large 4 — findings by Kimi K3

- Source: Mistral AI (`mistral-large-4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 ("Le Chonk", Public Preview)
- **Short description:** Mistral's 1.05T-parameter natively multimodal MoE (49B active, 1.6B vision encoder), launched as an API preview 2026-10-06 with open weights promised ~2026-10-27 under a custom Mistral license. Pitched as the strongest Western open-weight model on aggregated benchmarks.
- **Provider / access:** Mistral API (`mistral-large-4`, docs `mistral-large-4-0` v26.10), Mistral Studio, OpenRouter; Chat-Completions-style API with function calling, structured outputs, batching, agents. ~2 API providers at launch (Artificial Analysis).
- **Release / knowledge:** 2026-10-06 (preview); knowledge cutoff not published; RL run "still in flight" per launch post, so the preview may shift before weights drop.
- **IDs:** `mistral-large-4` (Mistral API); `mistralai/mistral-large-4` (OpenRouter/Vals). No OpenCode Zen Free ID verified.
- **Context window:** 1M tokens per Mistral docs (v26.10); Artificial Analysis measures 524k, Vals lists 512k with 256k max output — host-measured limits below the documented spec (discrepancy unresolved as of preview).
- **Modalities:** text + image in → text out (video not supported per Vals); hybrid instruct+reasoning (reasoning effort supported); function calling; JSON/structured outputs.
- **Pricing (as of 2026-10-09):** $1.36 / $4.18 per 1M in/out, $0.14/M cached; docs show a ~2-week preview promo at $0.68 / $0.07 / $2.09. Blended (7:2:1) ≈ $0.79/MTok.
- **Architecture:** granular MoE, 1.05T total / 49B active, 1.6B vision encoder; trained from scratch on ~3,800 NVIDIA Grace Blackwell GPUs in Mistral's EU data centers, 160+ languages; API-only until the open-weights drop (~Oct 27).

### Raw benchmarks found

Agent / tool use:

- AutomationBench (657 business workflows): **59.9%** (Mistral-reported via explainx/VentureBeat)
- Harvey's Legal Agent Benchmark: **15.83%**, **#6/76** (Vals AI, independent)
- Terminal-Bench 4.0: **28.3%** vendor-reported; **22.73%** independent, #21/45 (Vals AI)
- AA-Briefcase v1.1: **1393 Elo** (Mistral-reported; ahead of DeepSeek V4 Pro)
- Finance Agent (Vals v2): **54.68%**, #22/76 (independent); FinWorkBench **67%** (VentureBeat, preliminary)
- Tax Agent Bench: 30.39%, #23/67 (Vals AI)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **38** (#64/226; tied with GPT-6 Luna; highest Western open model per OfficeChai; vs Large 3 at 9)
- MysteryMechanism: **12.16%**, #25/25 (Vals AI — weak hard-science probe)
- ProofBench v1.1: **10.0%**, #43/48 (Vals AI)
- EMB: 56.21%, #44/72; MedScribe 80.43%; BioMysteryBench 67.04%, #18/25 (Vals AI)
- GPQA Diamond / HLE / CritPt: no independent verified public score found (SciCode-Verified "SOTA among open weights" is vendor-claimed)

Coding:

- DeepSWE v1.1: **~61.7%** (Mistral-reported; Coding Agent Index 49.8% combined, ahead of DeepSeek V4 Pro and Qwen3.8 Max)
- SWE-Atlas CodeBase QnA: **59.4%** (Mistral-reported)
- Vibe Code Bench v1.1: **78.40%**, #26/110 (Vals AI, independent)
- Surge AI blind human coding eval: **3.74/5**, 2nd of 5 (behind Opus 5 4.22, ahead of GLM-5.3 3.60)
- Code Migration: 30.56%, #39/75 (Vals AI)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 1M claimed (docs); no MRCR/RULER/AA-LCR public number found for this release.

Vision:

- Dense 200 visual grounding **42%** (edges GPT-6 Astra's 41%, vendor-reported); DIOR-RSVG aerial grounding **73%**.

Cyber (positioning note): Cybench **93%** solved and AA Cyber Index top-5 (vendor-reported; independent replication pending the weights).

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 84/100.** AutomationBench 59.9% and #6/76 on Harvey's Legal Agent Benchmark show strong agentic tool use; full function-calling/agents stack on the API. Capped by very low absolute legal/tax pass rates (hard benches) and thin independent agentic coverage at 3 days old.
- **Reasoning: 76/100.** AA Intelligence Index 38 is a real jump over Large 3 (9) and ties GPT-6 Luna, but ProofBench 10% and MysteryMechanism last-place show weak formal/hard-science reasoning under the hood. Capped by missing GPQA/HLE independence.
- **Context window: 88/100.** 1M documented with 256k max output (Vals); 512–524k on measured hosts. Strong spec, capped by the docs-vs-hosts discrepancy and zero public long-context retrieval scores.
- **Multimodal: 70/100.** Native image input with solid grounding (Dense 200 42%, DIOR-RSVG 73%), but text-only output and no video/audio input (Vals).
- **Coding: 82/100.** Vendor numbers lead open models (DeepSWE 61.7, Coding Agent Index 49.8, SWE-Atlas 59.4), #2/5 blind human eval, independent Vibe Code 78.4% (#26/110); capped by mid-pack independent Terminal-Bench 4.0 (22.7%) and Code Migration (30.6%).
- **Cost efficiency: 72/100.** $1.36/$4.18 (promo half) is cheap for the class, but AA logs 200M output tokens per Intelligence Index ($1.13/task) and Vals $13.78/test — verbosity eats the token-price advantage.
- **Overall Score: 80/100.** Mean of 84/76/88/70/82 = 80.0 → 80. Best fit: EU-sovereign/enterprise deployments wanting a trillion-scale open-weights flagship for agentic knowledge work once weights land Oct 27.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (Artificial Analysis model page, Vals AI independent benchmark suite, explainx.ai launch analysis incl. Mistral announcement/VentureBeat relay); scores are normalized 1–100 interpretations, not official vendor scores. Vendor-only numbers flagged as such.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
