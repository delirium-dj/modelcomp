# Mercury 2.5 — findings by Mimo v2.6 Flash

- Source: Inception Labs/Mercury 2.5 (`inception/mercury-2.5`)
- Date: 2026-10-16 (UTC) — second pass (first pass 2026-10-02; user-approved enrichment update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception Labs' most capable production diffusion LLM (dLLM) (released 2026-09-08) — generates/refines tokens in parallel instead of sequentially, delivering frontier-adjacent quality at extreme speed (1,107 tokens/s on commodity NVIDIA GPUs); positioned for latency-sensitive coding subagents, search/voice pipelines and agent loops. Successor to Mercury 2; vendor claims +40% intelligence over Mercury 2, comparable to GPT-5.6 Luna (Low) / Gemini 3.5 Flash-Lite / Claude Haiku 4.5.
- **Provider / access:** Inception API (OpenAI-compatible, `model: "mercury-2.5"`), Baseten, OpenRouter (single provider per OR); enterprise dedicated capacity. **NEW: API trial includes 100 million free tokens** (official blog) — a bounded trial, not a standing $0 tier; YC companies can claim $500K in deployment benefits. Sibling previews launched 2026-09-29: Mercury Voice (TTFT <170 ms) and Mercury Router; Mercury 2 named to TIME Best Inventions 2026 (2026-10-15).
- **Release / knowledge:** 2026-09-08 (benchable/ModelBeat tracking date); knowledge cutoff not published.
- **IDs:** `inception/mercury-2.5` / `mercury-2.5`; no Zen Free ID found.
- **Context window:** **260K tokens** (up from Mercury 2's 128K — Baseten); max output not stated (8,192-token completions in examples).
- **Modalities:** **text only in/out** (no image/audio input documented; Mercury Voice is a separate product); reasoning yes (tunable reasoning levels, `reasoning_effort` parameter); **parallel tool calls** + schema-aligned structured JSON output.
- **Pricing (as of 2026-10-16):** **launch promo 80% off STILL LIVE — $0.04 in / $0.15 out per 1M** (cache $0.004) on Inception + OpenRouter (re-verified on both, plus Epoch lists it as the operative price); list price **conflict**: vendor blog says **$0.20/$0.75**, Artificial Analysis shows **$0.25/$0.75** (90% cache discount, blended $0.14, $0.12 per Index task) — vendor figure used as primary. Speed (AA measured): **777.1 tok/s (#2/149)** vs vendor's 1,107 tok/s claim (commodity-GPU marketing figure vs API-measured); TTFT 3.15 s (above the 1.79 s class median — reasoning latency); very concise (35M Index tokens vs 96M median).
- **Architecture:** proprietary diffusion language model — "largest diffusion language model ever trained" (vendor); parameters undisclosed; no open weights.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = "no verified public score found".

Agent / tool use:

- Tool calling documented (parallel tool calls, `tools`/`tool_choice`, structured outputs — OpenRouter/Baseten); production agent case: Augment Code reports compaction latency −82% (150s → 27s) and −90% cost using Mercury (vendor-cited customer, no harness score); OpenCall voice P99 minutes → 1 s
- **NEW independent (AA, obs. 2026-10-16):** Terminal-Bench 4.0: **0.0%**; GDPval-AA: **0.0%** — first pass treated the GDPval 0.0 as a render artifact; with TB4.0/CritPt/Harvey all also at 0, these are now read as genuine measured zeros on AA's high-difficulty harnesses
- **NEW independent (Vals AI via OpenRouter):** Finance Agent v2 **18.9%**, SkillsBench **18.1%**, CyberBench v1.1 **45.5%**, Code Migration **4.5%**, Harvey's Legal Agent **0.0%**, Tax Agent Bench (row present; value truncated in fetch)
- Tau3-Banking / Tau2-Bench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **12.3 → 12** (#93/171, re-confirmed obs. 2026-10-16 — now *below* the class median of 13)
- Humanity's Last Exam: **11.8%** (AA, re-confirmed)
- AA-LCR (long-context recall): **71.7%**; AA-Omniscience Accuracy 22.7% / Non-Hallucination Rate 19.7% (AA)
- CritPt: **0.0%** (AA + Epoch best-score both — first pass's "no usable score" caveat resolved: measured zero); GPQA Diamond: no verified public score found
- **NEW independent (Epoch AI):** ProofBench **3%** (corroborated by Vals ProofBench v1.1 **3.0%**) vs GPT-6 Astra 99% / Fable 5.1 100% / Kimi K3 87%; IOI (Vals): **2.4%**; Vals LegalBench **83.1%** (one bright spot — classification-style), MedScribe 55.1%
- ModelCap Index: 36.3, rank #131/223 (2026-09-19)

Coding:

- **SciCode: 38.5%** (AA, re-confirmed) / **39%** (Epoch best-score — two independent sources agree)
- **NEW independent (Epoch AI):** ALE-Bench **302** vs GPT-6 Astra 2,951 / Fable 5.1 2,143 / Kimi K3 1,524 — a ~10× gap to frontier agentic-SWE; Vals Code Migration **4.5%**, MedCode **31.3%**
- SWE-bench / LiveCodeBench / DeepSWE / Terminal-Bench 2.1: no verified public score found
- Benchable's own harness reports Coding 98.0% / Math 98.0% / Reasoning 96.0% but Instruction Following 0.0% (Benchable internal categories — non-standard harness, treated as secondary)

Long context:

- 260K window (official); **AA-LCR 71.7%** — solid recall at the tested lengths; MRCR/RULER at 260K: no verified public score found

Multimodal:

- Text-only model — no image/audio input or non-text output documented (multimodal = no-data floor per methodology)

### Normalized scores (1–100)

- **Tool use: 48/100.** (Was 55.) The first pass scored on documentation alone ("no harness number exists"); now harness numbers exist and they are low: Terminal-Bench 4.0 **0.0%**, GDPval-AA **0.0%** (measured zeros, not render artifacts), Vals Finance Agent 18.9% / SkillsBench 18.1% / Code Migration 4.5% / Harvey 0.0%, with only CyberBench 45.5% mid-band. Parallel tool calls, schema JSON, and real production deployments (Augment Code, OpenCall) remain genuine positives, but the evidence no longer supports mid-band — low band.
- **Reasoning: 52/100.** Unchanged — the second pass re-confirmed every anchor: Index 12 (#93/171, below median 13), HLE 11.8%, CritPt 0.0% (now cross-confirmed by Epoch), ProofBench 3% (Vals + Epoch agree), IOI 2.4%, Omniscience 22.7/19.7 — all consistent with the original below-mid-band placement; LegalBench 83.1% is classification-style and doesn't move the dim; AA-LCR 71.7% stays the bright spot.
- **Context window: 72/100.** Unchanged — 260K re-confirmed by vendor, AA, and Epoch (200K–500K band, 200K = 70); measured AA-LCR 71.7% supports real usability; no MRCR/RULER at 260K and output cap still unpublished.
- **Multimodal: 15/100.** Unchanged — AA re-confirmed text-only in/out (obs. 2026-10-16); methodology floor band.
- **Coding: 55/100.** (Was 60.) SciCode 38.5%/39% (AA + Epoch agree) still sits at the "SciCode <40%" mid marker, but the new rows lean weak: ALE-Bench 302 vs Astra's 2,951 (~10× gap), Vals Code Migration 4.5% and MedCode 31.3%; still no SWE-bench/LiveCodeBench row despite coding-subagent positioning. Net: solidly mid-band, lower half.
- **Cost efficiency: 98/100.** Unchanged — promo $0.04/$0.15 (cache $0.004) re-verified live on Inception + OpenRouter and listed by Epoch; beats the ~$0.10/$0.20 anchor on both axes. Caveats: paid (100M free trial tokens are bounded, not a tier), no published end date for the 80% discount, list-price conflict ($0.20 vendor vs $0.25 AA). Not counted in Overall.
- **Overall Score: 48/100.** (Was 51 on 2026-10-02.) Mean of the five non-cost dims (48 + 52 + 72 + 15 + 55) / 5 = 48.4 → 48 — Tool −7 and Coding −5 because the previously missing harness numbers arrived (Vals suite + Epoch + AA zeros) and they read low; Reasoning/Context/Multimodal re-confirmed unchanged. Best-fit: ultracheap, ultrfast text-only diffusion reasoner for high-volume subagent/compaction/search/voice calls where latency dominates; not for agentic terminal work (TB4.0 0%), frontier reasoning, or anything multimodal.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-16
- Method: public internet research, second pass (first pass 2026-10-02) across official sources (Inception Labs blog https://www.inceptionlabs.ai/blog/introducing-mercury-2-5 — list $0.20/$0.75, promo, 100M free tokens, speed claim) plus independent sources (Artificial Analysis https://artificialanalysis.ai/models/mercury-2-5 — Index 12, TB4.0 0.0, measured 777 tok/s, list $0.25 conflict; OpenRouter benchmark block https://openrouter.ai/inception/mercury-2.5 — 13 Vals AI rows, promo re-verified; Epoch AI https://epoch.ai/models/mercury-2-5 — ProofBench 3%, CritPt 0%, SciCode 39%, ALE-Bench 302; ModelBeat page 404). Conflicts compared (list $0.20 vs $0.25; vendor 1,107 tok/s vs AA 777.1; first-pass "render artifact" zeros reclassified as measured). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
