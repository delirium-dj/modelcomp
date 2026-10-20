# Grok 4.3 — findings by Step 5 Preview

- Source: xAI / SpaceXAI (`grok-4.3`)
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3 (beta 2026-04-17, API GA 2026-04-30; succeeded by Grok 4.5 on 2026-07-09)
- **Short description:** xAI's reasoning-first flagship for the April–June 2026 window — launched with no livestream and no model card, just a quiet pricing-page update that cut input ~37–58% and output ~58–83% versus Grok 4.20 while expanding context to 1M and adding native video/PDF/PowerPoint/spreadsheet generation (reasoning-only: thinking cannot be disabled). Artificial Analysis scored it 53 on its Intelligence Index (above Muse Spark and Sonnet 4.6, +4 over Grok 4.20, still below GPT-5.5 xhigh and Opus 4.7), and its GDPval-AA Elo jumped +321 to 1,500 — xAI's largest single-release agentic gain, though still 276 Elo behind GPT-5.5 xhigh (~17% expected win rate). Its real story was an agentic price collapse: one engineer's 18-task long-horizon test had it tie Opus 4.7 on quality (12.0/15 head-to-head) at 9.1× lower cost ($7.84 vs $71.50), winning 13/18 overall, and it beats Opus 4.7 by ~1.26× on Vending-Bench 2's simulated-year bank balance.
- **Provider / access:** xAI API (OpenAI-SDK-compatible), Bedrock, Azure AI Foundry, Vertex AI, OpenRouter, Perplexity, Snowflake, Vercel — 38 hosts.
- **Release:** 2026-04-30 (GA); knowledge cutoff Dec 2025.
- **Context window:** 1M tokens (max output up to 900K via API; 30K on many routes).
- **Modalities:** Text, image (and PDF) in → text out — plus native PDF/Excel/PowerPoint generation; some coverage credits native video input.
- **Pricing (as of 2026-10-09):** $1.25/M input, $2.50/M output, $0.20 cache read (short context); above 200K tokens: $2.50/$5.00/$0.40; batch $1.00/$2.00/$0.16; web search $5/1,000 calls.
- **Speed:** ~131–207 tok/s; p95 TTFT 0.81 s.

### Raw benchmarks found

- BenchLM composite (2026-10-19): **53.08/100** overall, #85 of 956 models, 32 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **25** (#124/217 — matches the file's legacy 10k-workload read), 94.0 tok/s, TTFT 21.42s, $1.25/$2.50 with 84% cache discount (blended $0.64/M; $0.21 per Index task), 1M context, 3 providers — DEPRECATED on AA (suggests Grok 4.6)

Third-party (Artificial Analysis / ARMES / CloudPrice):

- Intelligence Index: **53** (ARMES citation; the legacy AA 10k-workload index lists 25 vs a 26 median); LMArena 1,398 Elo
- GDPval-AA: **1,500 Elo** (+321 over Grok 4.20; GPT-5.5 xhigh leads by 276 Elo, ~17% win rate)
- GPQA Diamond: **90.1%**; HLE: **35.0–37.2%**; IFBench: **81.0%**; SciCode: 47.3%
- τ²-Bench Telecom: **97.7–98%**; TAU2 1.0 normalized (#11 of tracked); CaseLaw v2: **79.3%** (#1, +25 pts over 4.20); CorpFin: **#1**
- Coding Index: 41–42.2 (#94); Terminal-Bench Hard: 38.0% (#54); LCR 0.8 (#90); output 131.3 tps (#79)
- SWE-bench Verified: trails Opus 4.7 by ~14 points (per independent testing)

Independent field test (Towards AI, 18 long-horizon agent tasks vs Claude Opus 4.7):

- 13/18 wins; 12.0/15 on head-to-head tasks (tie); $7.84 vs $71.50 total cost (9.1× cheaper); ~half the wall time; 207 t/s
- Wins concentrated in multi-step web research, Vending-Bench-style simulation, multi-tool agentic flows and video understanding; loses on single-pass code review and 100K-document Q&A
- Vending-Bench 2: ~1.26× Opus 4.7's final bank balance after a simulated year

Flagged caveats (ARMES): "computational narcolepsy" (idle pauses) and structural looping in long unattended agent runs; lateral/creative reasoning regressed (NYT Connections 67.5% vs 4.20's 93.4%); elevated jailbreak risk in Azure red-teaming.

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-Telecom 97.7–98% remains strong, but the third pass measured the agentic suites the file previously lacked and they are weak: AA Agentic Index **17.2%**, APEX-Agents-AA **17.0%**, ResearchClawBench **12.4%**, Terminal-Bench 2.1 (Vals) **41.9%**, MazeBench 0%, and GDPval-AA reads **29.2% normalized / Elo 1,018** on AA's current page — well below the ARMES-cited Elo 1,500. Trimmed from 78: the structured-tool strength does not carry to the independent agentic composites. (The 18-task field test's agentic wins still stand as vendor-adjacent evidence.)
- **Reasoning: 82/100.** GPQA Diamond 90.1%, HLE 35.0–37.2%, IFBench 81.0% and an AA composite of 53 put it upper-mid-band; the lateral/creative regression (NYT Connections 67.5% vs 93.4%) and its 4-point deficit to GPT-5.5 on the composite hold it below frontier.
- **Context window: 86/100.** A 1M-token window — the ≥1M band — with the first published long-context measure (AA-LCR **64.3%**, 2026-10-19) only modest and no MRCR/RULER curve; the demonstrated ~600K-token clean recall in independent testing still supports the tier. Trimmed from 90 on the measured LCR.
- **Multimodal: 70/100.** Text + image (+PDF) in → text out with native document generation; the first published MMMU row (AA-MMMU-Pro **78.1%**, 2026-10-19) is solid mid-band — a structural top-of-60s score, still held down by no video input and the unverified native-generation claims.
- **Coding: 66/100.** The weak axis: Coding Index 41–42.2, SciCode 47.3%, TB Hard 38.0%, SWE-V ~14 points behind Opus 4.7, and the field test's code-review bucket lost 1.5/3 to 3.0/3 — xAI itself was transparent that coding is not 4.3's strength (that was Grok 4.5's job).
- **Cost efficiency: 88/100.** $1.25/$2.50 with $0.20 cache (batch $1/$2) — the methodology's ~$1.25/$2.5 ≈ 88 point — and the measured 9.1× task-cost advantage over Opus 4.7 on agentic workloads is the model's actual headline.
- **Overall Score: 74/100.** Mean of the five non-cost dims (68+82+86+70+66)/5 = 74.4 (Tool use 78→68 and Context 90→86 on the newly measured independent agentic/LCR rows). Best-fit recommendation: the long-horizon agent value pick of spring 2026 — Opus-4.7-tie quality at a ninth of the cost on multi-tool loops, 1M context and 200 tok/s; not a coding or creative-reasoning model, and it needs supervision on very long unattended runs.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis (deprecated, suggests Grok 4.6: Index 25 #124/217 — unchanged; 94.0 tok/s; TTFT 21.42s; $1.25/$2.50 confirmed, $0.21/task) and BenchLM (composite 53.08/100, #85/956, 32/644 benchmarks): the agentic gaps the file lacked are now measured and weak — AA Agentic Index 17.2%, APEX-Agents-AA 17.0%, ResearchClawBench 12.4%, TB2.1 (Vals) 41.9%, GDPval-AA 29.2%/Elo 1,018 (vs the ARMES-cited 1,500) — so Tool use was trimmed 78→68; AA-LCR 64.3% (first published) trims Context 90→86 (Overall 77→74). Corroborating rows: AA-MMMU-Pro 78.1% (fills the multimodal gap), AA Coding Index 42.3%, SciCode 47.3%, IFBench 81.3%, Epoch FrontierMath v2 42.8%/14.6% (weak math), GPQA (Vals) 91.4%, Omniscience hallucination 25.0% (confirms the low-hallucination claim). Second-pass verification (2026-10-10): benchmarklist.com and rankllms.com have no Grok-4.3 page; the AA/ARMES/CloudPrice trackers and the Towards AI 18-task field test confirmed the then-existing reads. Prior pass (2026-10-09) used xAI pricing docs, Artificial Analysis/ARMES/CloudPrice/aiapiindex trackers, Towards AI 18-task field test, AI/TLDR model page.
- Future sources: add a new file next to this one, e.g. `Grok_4_6.md`, using the same headings.
