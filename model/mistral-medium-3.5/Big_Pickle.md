# Mistral Medium 3.5 — findings by Big Pickle

- Source: Mistral AI (`mistral-medium-3-5`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's first flagship "merged" model — a 128B dense open-weight model unifying instruction-following, reasoning and coding in one set of weights, optimized for long-horizon agentic coding and productivity work; tops open-weight SWE-bench Verified at release.
- **Provider / access:** Mistral AI API (`mistral-medium-3-5`), Mistral Vibe/Le Chat agents, OpenCode Zen `opencode/mistral-medium-3.5`; weights on Hugging Face (Modified MIT). Chat Completions API.
- **Release / knowledge:** GA 2026-04-28/29; knowledge cutoff April 2026.
- **IDs:** `mistral-medium-3-5` / `opencode/mistral-medium-3.5` (paid on Zen; no Free ID known).
- **Context window:** 256K (256,000 in / 256,000 out per llm-stats; 262K/210K max output per Puter). Verified via Mistral docs + providers.
- **Modalities:** Text + image input (vision encoder trained for variable image sizes), text output; function calling, structured JSON, predicted outputs, batching, agents; configurable reasoning effort.
- **Pricing (as of 2026-09-23):** $1.50 in / $7.50 out per 1M (Mistral official). Zen "standard pricing".
- **Architecture:** Dense 128B transformer; open weights under Modified (commercial-friendly) MIT; self-hosts on as few as four GPUs.

### Raw benchmarks found

Agent / tool use (Mistral official + Artificial Analysis):

- τ³-Telecom: **91.4%**; τ³-Retail: **76.1%**; τ²-Bench: **94.2%**; COLLIE: **95.8%**
- Terminal-Bench Hard: **33.3%** (AA)
- AA Agentic/capability index: **76.8** (modelscale capability evidence)
- GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **74.8%** (AA)
- HLE: **13.8%** (AA — low)
- AIME 2025: **86.3%**; Beyond AIME: **66.9%**; BrowseComp: **48.6%** (llm-stats)
- LCR (long-context reasoning): **65.3%** (AA)
- Artificial Analysis Intelligence Index: reported inconsistently across trackers (14.2–30.4); treat as mid/low — the strongest signal is HLE 13.8 and Index-Coding 46.9
- AA-Omniscience Index: **-36.8** (negative = more incorrect/ hallucinatory than correct on that knowledge suite; flags hallucination risk)

Coding:

- SWE-bench Verified: **77.6%** (Mistral official — top open-weight at release, second only to Gemini 3.1 Pro 78.8%)
- SWE-bench (Vals run): **66.4%**; AA Coding Index: **46.9**
- AA SciCode: **39.6–40.2%**
- DeepSWE / LiveCodeBench / SWE-bench Pro: no verified public score found

Long context:

- 256K documented; LCR 65.3% (AA) is the only retrieval-ish reading found; no MRCR/RULER at full window.

### Normalized scores (1–100)

- **Tool use: 74/100.** τ³-Telecom 91.4% and COLLIE 95.8% are strong vendor agentic rows, but BenchAlign lanes rank the agentic profile #99/117, Terminal-Bench 2.1 (Vals) is only 39.0% and Terminal-Bench Hard 33.3% — the independent agentic picture is weaker than the headline.
- **Reasoning: 65/100.** AA now pins the Intelligence Index at **14** (native; vs GLM-5.2's 34); GPQA Diamond (Vals) **34.8%** contradicts the vendor's 74.8 — treat vendor reasoning claims with caution; HLE 13.8% and a negative omniscience index cap it well below frontier.
- **Context window: 72/100.** 256K hits the 200K–500K band (65-84); LCR 65.3% is the only retrieval-ish reading; no full-window MRCR/RULER benchmark published.
- **Multimodal: 68/100.** Vision (image) input with a purpose-trained encoder; no video/audio input or non-text output; BenchLM multimodal lane 56.7.
- **Coding: 75/100.** SWE-bench Verified 77.6% was the open-weight leader at launch; SWE-bench (Vals) 66.4%, AA Coding Index 46.9, SciCode ~40% and a #101/142 BenchAlign coding lane keep it solid-mid.
- **Cost efficiency: 78/100.** $1.50/$7.50 is moderate; input is cheap but output pricing is steep relative to the ~$0.60/$2.20 and $1.25/$4.25 references; open weights offset some API cost.
- **Overall Score: 71/100.** (74 + 65 + 72 + 68 + 75) / 5 = 70.8 → **71** (lowered from 73 on 2026-10-08, see Re-verification). Best-fit: affordable open-weights agentic coding/workflow model with vision; watch hallucinations (negative omniscience) in knowledge-heavy use.

---

## Re-verification — 2026-10-08 (15 days after original)

Light-to-medium re-verification — no dedicated BenchLM profile (404; tracked only in compare mirrors as `mistral-medium-3-5-128b`, 7 sourced rows, overall 36.23), but AA now pins the Intelligence Index and new Vals rows surface.

| Dimension | 2026-09-23 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 78 | 74 | −4 |
| Reasoning | 68 | 65 | −3 |
| Context window | 72 | 72 | — |
| Multimodal | 68 | 68 | — |
| Coding | 77 | 75 | −2 |
| Cost efficiency | 78 | 78 | — |
| **Overall** | **73** | **71** | **−2** |

New and corrected data:

- **AA Intelligence Index resolved: 14** (native scale, on AA's Mistral provider page — the earlier "14.2–30.4 inconsistent" range is now pinned at the bottom). Context: GLM-5.2 max 34, Mistral Small 4 11.
- **Vals rows (first independent coding/reasoning lines):** GPQA Diamond (Vals) **34.8%** — dramatically below the vendor's 74.8%, likely a different config/effort — flag as a vendor-vs-independent conflict; MMLU-Pro (Vals) 75.3%; SWE-bench (Vals) 66.4%; Terminal-Bench 2.1 (Vals) 39.0%; Gert Labs 39.10%.
- **BenchAlign lanes:** overall 36.23; agentic #99/117 (19.7), coding #101/142 (26.7), knowledge #119/168 (33.8), instruction-following #48/124 (82.6), reasoning 69.9 (2 rows), multimodal 56.7 (1 row).
- **τ³-Telecom 91.4% re-confirmed** (BenchLM row) — the flagship agentic claim still holds alongside COLLIE 95.8 / τ² 94.2.
- **No successor release found**; pricing $1.50/$7.50 unchanged (262K ctx / 210K max out per Puter/lmmarketcap).

Gaps still open after re-run: DeepSWE, LiveCodeBench, SWE-bench Pro rows for this model; MRCR/RULER; independent reproduction of the vendor 77.6 SWE-V / 74.8 GPQA numbers.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-08 (re-verified; original research 2026-09-23)
- Method: public internet research (Mistral blog/docs, Artificial Analysis, BenchLM compare mirrors, Vals, llm-stats, modelscale, Puter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.