# Gemini 4 Argon — findings by Space Bunny Alpha

- Source: Google (`gemini-4-argon`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's frontier flagship and the anchor of the Gemini 4 generation, announced 2026-09-30. Built for long-horizon professional work — real-world software engineering, enterprise knowledge work (legal, finance, tax) and defensive cybersecurity — with an industry-leading 1M output-token ceiling. Not a variant of Gemini 3.x Pro; it replaces the cancelled Gemini 3.5 Pro and introduces a new naming scheme. Access is staged: Fairwind Program cyber defenders first, then paid API customers and Google AI Ultra subscribers.
- **Provider / access:** Google Gemini API (`gemini-4-argon`), Vertex AI, Google AI Studio; also Gemini API-compatible third-party catalogues (models.dev / LLM Reference list the API id `gemini-4-argon`). Gemini API surface is OpenAI-compatible Chat Completions plus Google's native Responses API. As of 2026-10-01 it is **not** broadly available: rollout begins with trusted cyber defenders via the Fairwind Program while Google participates in the US voluntary pre-release access process.
- **Release / knowledge:** announced 2026-09-30 (Google blog, DeepMind cyber page, CNBC, Axios, Ars Technica, VentureBeat). Knowledge cutoff not published.
- **IDs:** `gemini-4-argon` (Gemini API). No OpenCode Zen Free ID.
- **Context window:** **1,048,576 tokens input (1M)** — Gemini API / Artificial Analysis / Vals AI. Max output is **contested**: Google announces an "industry-leading 1M output tokens" ceiling (up from Gemini 3.x's 64K), while Vals AI's independent run records **262,144 max output** and caps its harness there. Treat 1M output as the vendor claim and 262K as the independently reproduced figure.
- **Modalities:** text, image, video and (per Artificial Analysis) speech input; text output (Artificial Analysis, Vals AI, Google). Reasoning: yes, with monitored chain-of-thought (Google). Tool calls: yes — DeepSWE run under a mini-swe-agent harness, CWE-bench v1 under Google's own agent configuration. JSON mode / structured output supported on the Gemini API.
- **Pricing (as of 2026-10-01):** **introductory $2.00 / $10.00 per 1M input/output tokens, cached input at 95% off (≈$0.10/M)**; **after the introductory period $4.00 / $20.00 per 1M input/output** (cached ≈$0.20/M at the same 95% discount). Google has not stated how long the introductory period lasts. No free tier.
- **Architecture:** proprietary; no weights, no parameter count, no MoE/attention disclosure. A Google spokesperson said only that Argon is "larger and more powerful" than the previous Pro-tier line (Straits Times).

### Raw benchmarks found

Agent / tool use:

- **Terminal-Bench 4.0: 57.4%** (Google launch table; **Vals AI independent run: 57.58% ±2.31, #5 of 42**, reasoning effort "high", temperature 1.0). Google-table comparison set: GPT-6 Astra 58.2, Claude Fable 5.1 57.9, Claude Opus 5.5 66.4 — so Argon is mid-pack to last on this harness, and the ordering depends on which agent harness wraps each model.
- **Terminal-Bench Science 0.1: 57.6%** (Google table, with the 6× standard time limit) vs **44.29% ±5.98 when Vals AI ran it** (#3 of 34) — a 13-point gap between vendor and independent harness on the same benchmark, the single loudest methodology warning in this launch.
- **Agent's Last Exam (pass rate): 39.5%, #1** (Google table; GPT-6 Astra 34.2, Claude Opus 5.5 38.2).
- **OSWorld-2.0 (offline subset, partial reward): 69.2%** (#2; GPT-6 Astra 72.6).
- **PostTrainBench: 45.3%** (#3; Claude Opus 5.5 49.3, Claude Fable 5.1 40.2, GPT-6 Astra 44.3).
- **CWE-bench v1 (vulnerability remediation): 68.0%, tied #1** with GPT-6 Astra and Grok 4.7; Claude Opus 5.5 67.0, Fable 5.1 58.0. Caveat: OpenAI and Anthropic numbers come from their own harnesses (Codex, Claude Code), so the leaderboard measures model-plus-tooling together.
- **Gray Swan Indirect Prompt Injection (attack success rate): 0.7% — best of the disclosed set** (Claude Opus 5.5 1.0, Fable 5.1 1.0, GPT-6 Astra 8.5, GPT-6 Sol 27.0, GLM 5.3 31.5, Grok 4.8 51.8).
- **Vals CUA-bench: 4.83% (#7 of 8)** — the weakest tool/computer-use row, and expensive: $193.78 per test.
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found.**

Reasoning / knowledge:

- **Vals Index (economic impact across finance, coding, legal, tax, GDP-weighted): 68.90% ±0.97, #1 of 41** (Vals AI, independent) — ahead of Claude Sonnet 5.5 67.04, Claude Opus 5.5 66.97, GPT-6 Astra 63.1 (Google table), Claude Fable 5.1 65.8. $15.68 per test.
- **Artificial Analysis Intelligence Index: 53** — ties GPT-6 Astra and Claude Fable 5.1, behind Claude Sonnet 5.5 and Claude Opus 5.5; AA's read is "Google is back among the top three labs," not "best model."
- **Vals RSI Index (autonomous LLM R&D): 30.55% (#4 of 23).**
- **IOI: 100.00% (#1, tied with GPT-6 Astra).** **RiemannBench: 76.0% (#1).**
- **LegalBench: 88.30% ±0.37 (#3 of 149). Legal Research Bench: 54.81% (#4 of 72).**
- **Vals Finance Agent v2: 65.40% ±0.32, #1 of 73** (independent) — ahead of Gemini 3.8 Flash 61.44; Google table: Claude Opus 5.5 58.6, Fable 5.1 58.9, GPT-6 Astra 53.5.
- **Harvey's Legal Agent Benchmark: 19.58% ±3.31 (#5 of 73)**; Google table: 19.6 vs GPT-6 Astra 5.4 and Opus 5.5 3.8 — a huge relative lead, but the absolute number means it fully completes only about one legal task in five.
- **Tax Agent Bench 76.23% (#2 of 64), MedCode 58.80% (#3 of 104), EMB 75.24% (#4 of 69), MedScribe 87.43% (#15 of 106), ProofBench v1.1 99.00% (#5), SAGE 53.65% (#5 of 90), Public Benefits Bench 69.76% (#5), BioMysteryBench 76.30% (#6), MysteryMechanism 45.49% (#6), SRE Bench 44.27% (#3 of 16), CyberBench v1.1 77.86% (#2 of 43).**
- GPQA Diamond / HLE / CritPt / LCR-MLCR / AA-Omniscience / Hallucination Rate: **no verified public score found.**

Coding:

- **DeepSWE v1.1 (real-world long-horizon software engineering): 77.9% — new state of the art** (Google, self-computed under a mini-swe-agent harness; GPT-6 Astra 74.1 and Claude Opus 5.5 74.2 come from their own reported systems, so the cross-vendor comparison is not harness-controlled). Google DeepMind also documents internal production results: a 32K-line SIMD replacement in libgav1 yielding a decoder **2.7× faster** than the prior Rust port, and C/C++→Rust migrations up to **800K+ lines** (Fuchsia Zircon).
- **FrontierSWE v2: 55.0% — last of the four compared** (GPT-6 Astra 65.5, Claude Opus 5.5 62.3, Fable 5.1 56.3): a 10.5-point deficit on the longest-horizon software-engineering test.
- **Vibe Code Bench v1.1: 91.91% ±1.90 (#2 of 106)** — a narrow lead-style win (Google table 91.9 vs Fable/Opus 90.3, Astra 89.6).
- **Vals Code Migration: 68.17% ±4.35 (#2 of 71)**; $57.82 per test.
- **ProgramBench: 2.50% fully resolved (#5 of 54)** — near-zero on "rebuild a program from a binary", the one coding row where Argon looks weak.
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / AA-SciCode / DeepSWE v1.1 independent rerun: **no verified public score found** beyond the single vendor-reported DeepSWE v1.1 figure.

Long context:

- **GraphWalks, up to 128K (BFS F1): 99.7% (#1)** vs GPT-6 Astra 98.7, Fable 5.1 91.4, Opus 5.5 90.6.
- **GraphWalks, 256K → 1M (BFS F1): 84.2% (#1)** vs GPT-6 Astra 71.8, Claude Opus 5.5 66.8, Fable 5.1 65.0 — a 12.4-point lead at the long end, the strongest measured evidence that the 1M window is usable rather than advertised.
- No MRCR v2 or RULER row has been published for Argon, so the long-context picture rests on a single retrieval family.

### Normalized scores (1–100)

- **Tool use: 86/100.** Best-in-class agentic breadth for a first-day model — #1 on Agent's Last Exam (39.5), #1 tied on CWE-bench v1 (68%), best-in-set Gray Swan IPI robustness (0.7% ASR), 84.2% GraphWalks at 256K–1M — capped by mid-pack Terminal-Bench 4.0 (57.4%, #5 of 42) and last-of-field FrontierSWE v2 (55.0%), with no Tau3/GDPval/Claw row at all.
- **Reasoning: 85/100.** #1 of 41 on the GDP-weighted Vals Index (68.90%) and #1 on Finance Agent v2 (65.40%) are independent, expensive, hard-won numbers, and IOI 100% plus LegalBench 88.3% confirm breadth — capped by Artificial Analysis Intelligence Index 53, which only ties GPT-6 Astra and trails both newest Claude models, and by a Harvey's Legal Agent absolute of 19.6% that is a lead earned from a very low base.
- **Context window: 95/100.** Top tier: 1,048,576 input tokens with measured GraphWalks retrieval of 99.7% at ≤128K and 84.2% at 256K–1M, the best long-range retrieval in the disclosed comparison set — capped only by the unresolved output-limit conflict (Google's 1M output claim vs Vals AI's reproduced 262K) and the absence of any MRCR/RULER confirmation.
- **Multimodal: 90/100.** State of the art on long-video understanding (LVBench 91.7%) and on professional chart analysis (Chartography 71.6%), with text/image/video/speech input documented by Google and Artificial Analysis — capped because the Chartography margin is 0.6 points, SAGE sits mid-table at 53.65%, and no image-heavy academic row (MMMU/MathVista) has been published.
- **Coding: 80/100.** A genuine new state of the art on real-world long-horizon software engineering (DeepSWE v1.1 77.9%) and #2 on both Vibe Code Bench (91.91%) and Code Migration (68.17%), reinforced by real production migrations up to 800K+ lines — capped hard by last place on FrontierSWE v2 (55.0%), mid-table Terminal-Bench 4.0 (57.4%), and 2.5% fully-resolved on ProgramBench.
- **Cost efficiency: 55/100.** Introductory $2/$10 with cached input at 95% off is genuinely cheap for a frontier model — one-fifth of GPT-6 Astra and half of Claude Opus 5.5 on input — but the introductory period is undefined and the standing price reverts to $4/$20, which is Claude Opus 5.5 territory, and per-test cost climbs to $193.78 on CUA-bench.
- **Overall Score: 87/100.** Mean of the five non-cost dims (86 + 85 + 95 + 90 + 80) / 5 = 87.2 → 87. Best fit: enterprise knowledge work and long-horizon repository-scale engineering where a 1M window and a 1M output budget matter, and where vendor-side harness advantages are least likely to bite — treat Terminal-Bench and FrontierSWE deficits as workload-specific warnings, not as a general ceiling.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research (Google launch blog and DeepMind cyber page, the Gemini 4 Argon model-evaluation PDF, Vals AI's independent model report, VentureBeat / The New Stack / CNBC / Ars Technica launch coverage, Artificial Analysis's launch post, models.dev and LLM Reference provider records). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon_Recheck.md`, using the same headings — priority gaps are GPQA/HLE rows, an independent DeepSWE v1.1 rerun, MRCR v2 at 1M, and any resolution of the 1M-vs-262K output-limit conflict.