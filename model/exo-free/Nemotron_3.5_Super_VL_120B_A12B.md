# Exo-free — findings by Nemotron 3.5 Super VL 120B A12B

- Source: opencode.ai/data pages (usage/rank only, no benchmarks), github.com/dianlight/opencode-modelselect-action PR #74 (audit: exo-free has no benchmark data, skipped per Secondary Source Protocol), github.com/anomalyco/opencode issue #54065 ("Model exo-free has been deprecated"), benchlm.ai (404 — not tracked), artificialanalysis.ai (404 — not tracked), Hugging Face (no repo found), models.dev (no entry), LLM-Stats (gated/no entry), web search (nothing)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Exo-free (OpenCode Zen default / stealth model)
- **Short description:** OpenCode Zen default model; identity, lab, parameter count, architecture, modalities, and capabilities all undisclosed. Deprecated per OpenCode GitHub issue. Usage rank #29 by tokens (~54B tokens over two months) per OpenCode Data, but zero public benchmark scores exist.
- **Provider / access:** OpenCode Zen (default model). Deprecated — no confirmed current endpoint.
- **Release / knowledge:** Unknown; no release date or knowledge cutoff published.
- **IDs:** `exo-free` (OpenCode Zen), `exo` (OpenCode data rank listing). No HF repo, no model card, no provider spec found.
- **Context window:** Undisclosed.
- **Modalities:** Undisclosed (text assumed, unconfirmed).
- **Reasoning / tool use / structured output:** Undisclosed.
- **Pricing (as of 2026-10-16):** Undisclosed; free-tier default on OpenCode Zen historically.
- **Architecture:** Undisclosed.

### Raw benchmarks found

**None.** A repository audit (github.com/dianlight/opencode-modelselect-action PR #74) explicitly checked BenchLM (404), Artificial Analysis (404), Hugging Face (no repo), LLM-Stats (gated), models.dev (no entry), OpenCode's own data page (no benchmarks), and web search — all returned nothing. The model was skipped per the Secondary Source Protocol. OpenCode issue #54065 confirms "Model exo-free has been deprecated."

No scores found for: agent/tool use, reasoning/knowledge, coding, multimodal/grounded, long context, or instruction following.

### Conflicting results noted

- None — there are no results to conflict. The only signal is usage rank (#29 by tokens) with no accompanying quality evidence.

### Normalized scores (1–100)

**No evidence base exists for scoring.** All quality dimensions and Overall are marked insufficient evidence; no numeric scores are assigned (fabricating scores for a model with zero public benchmarks would violate the scoring methodology). Cost efficiency is not scored regardless.

- **Tool use: insufficient evidence.** No public agent/tool benchmarks.
- **Reasoning: insufficient evidence.** No public reasoning benchmarks.
- **Context window: insufficient evidence.** Context undisclosed.
- **Multimodal: insufficient evidence.** Modalities undisclosed.
- **Coding: insufficient evidence.** No public coding benchmarks.
- **Cost efficiency: not scored** (per formula, never counted toward Overall).
- **Overall Score: not computed — insufficient evidence.** No dimensional scores available to average.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research; all major aggregators (BenchLM, Artificial Analysis, Hugging Face, models.dev, LLM-Stats, OpenCode Data) checked — zero benchmark data found. Model deprecated. No numeric scores assigned due to insufficient evidence.
- Future sources: if benchmark data appears, add a new file next to this one using the same headings.
