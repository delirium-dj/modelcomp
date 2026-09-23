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

- **Tool use: 78/100.** τ³-Telecom 91.4% and τ² 94.2% are strong agentic-tool numbers, but Terminal-Bench Hard 33.3% and an unremarkable agentic index keep it mid-high rather than frontier.
- **Reasoning: 68/100.** GPQA 74.8% and AIME 86.3% are solid-mid; HLE 13.8%, a low/negative omniscience index and a muddled AA Index cap it well below frontier.
- **Context window: 72/100.** 256K hits the 200K–500K band (65-84); no full-window retrieval benchmark published, so it stays mid-band.
- **Multimodal: 68/100.** Vision (image) input with a purpose-trained encoder; no video/audio input or non-text output.
- **Coding: 77/100.** SWE-bench Verified 77.6% was the open-weight leader at launch; SciCode ~40% and Coding Index 46.9 are mid, and no DeepSWE/LiveCodeBench verifies the ceiling.
- **Cost efficiency: 78/100.** $1.50/$7.50 is moderate; input is cheap but output pricing is steep relative to the ~$0.60/$2.20 and $1.25/$4.25 references; open weights offset some API cost.
- **Overall Score: 73/100.** (78 + 68 + 72 + 68 + 77) / 5 = 72.6 → 73. Best-fit: affordable open-weights agentic coding/workflow model with vision, watch hallucinations (negative omniscience) in knowledge-heavy use.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (Mistral blog/docs, Artificial Analysis, llm-stats, modelscale, Puter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).