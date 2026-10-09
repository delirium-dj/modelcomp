# Ling 3.0 Flash — findings by Kimi K3

- Source: inclusionAI / Ant Group (`Ling-3.0-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** inclusionAI's open-weight hybrid-linear MoE flash model (2026-07-23): 124B total / 5.1B active, thinking on by default, 262K serving context. Generalist sibling of Ling 3.0 Flash VL (vision) and Ling 3.0 Flash Fin (finance, routed to `models_finance/`).
- **Provider / access:** Hugging Face `inclusionAI/Ling-3.0-flash` (open weights; SGLang/vLLM official) ; OpenRouter `inclusionai/ling-3.0-flash` (2 providers). Chat Completions, thinking mode default.
- **Release / knowledge:** 2026-07-23 (OpenRouter/HF card); knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.0-flash` (OpenRouter); `inclusionAI/Ling-3.0-flash` (HF). No OpenCode Zen Free ID verified (the Ant Group Free-series routes are separate; check Zen catalog).
- **Context window:** 262,144 tokens served (256K training schedule); max output 32,768.
- **Modalities:** text in → text out; thinking mode; tool calling (BFCL-V4 verified); no vision in this variant (that's the VL sibling).
- **Pricing (as of 2026-10-09):** **$0.021 / $0.063 per 1M in/out, $0.0042 cached** (OpenRouter via benchmarklist) — near the floor of the market.
- **Architecture:** hybrid linear-attention MoE, 124B total / 5.1B active, 256K training schedule (HF model card via benchlm).

### Raw benchmarks found

(BenchmarkList consolidated table; model-card rows = vendor, AA rows = independent, dated 2026-07-23 / 2026-10-03)

Agent / tool use:

- BFCL-V4: **73.0%** — **#4/98** (97th pct)
- Tau3-Banking: **28.0%** (#39/176); MCP Atlas: **65.5%** (#34/48); BrowseComp: **72.2%** (#48/60)
- GDPval-AA: **1107 Elo** (#90/352); AA-Briefcase: **797 Elo** (#74/145, verified; rubric pass 17.4%)

Reasoning / knowledge:

- GPQA Diamond: **85.5%** (#80/468, AA-verified); AIME 2026: **93.2%**
- HLE: **23.7%** (#104/478); AA Intelligence Index: **20.1** (#162/427)
- ObviousBench: **70.1%** pass³ (41st pct); AIIQ Composite IQ: **105** (40th pct)

Coding:

- SWE-bench Pro: **56.6%** (#39/58); SWE-bench Multilingual: **72.4%** (#28/49)
- Terminal-Bench 2.1: **57.0%** (#68/194); SciCode: **42.0%** (#97/296)
- ArtifactsBench: **77.0%** — **#1/8** in its cohort

Long context:

- AA-LCR: **73.0%** (#103/408); Context Arena (GDM-MRCRv2): field-leading average **50.2%** / thinking 74.3% at 128K, but only **10.8% AUC at 1M** — retrieval collapses far beyond the 262K serving window.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 68/100.** Elite function calling (BFCL-V4 #4/98) and decent MCP Atlas 65.5%, but Tau3-Banking 28% and 20th-pct BrowseComp keep agentic chains average.
- **Reasoning: 66/100.** GPQA 85.5% and AIME 93.2% are strong for 5.1B active; HLE 23.7%, AA Index 20.1 and mid ObviousBench (70.1%) show thin frontier knowledge/reliability.
- **Context window: 72/100.** 262K window with AA-LCR 73% (75th pct) and top Context Arena score at 128K — genuinely good retrieval within its window; caps hard at ~1M (10.8% AUC).
- **Multimodal: 15/100.** Text-only variant (vision lives in ling-3.0-flash-vl) — methodology floor.
- **Coding: 70/100.** SWE-Pro 56.6%, SWE-Multilingual 72.4%, TB2.1 57%, plus #1 ArtifactsBench — solid practical coding at extreme cost; SciCode 42% caps scientific depth.
- **Cost efficiency: 97/100.** $0.021/$0.063 with $0.0042 cached reads and 5.1B active — among the cheapest capable models per token anywhere; open weights too.
- **Overall Score: 58/100.** Mean of 68/66/72/15/70 = 58.2 → 58. Best fit: ultra-cheap text agent/coding pipelines and multilingual instr-following where cost dominates; needs the VL sibling (or another model) for any image input.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (benchmarklist.com consolidated 22-benchmark table with verified Artificial Analysis rows, OpenRouter listing, HF model card via benchlm, benchable summary); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
