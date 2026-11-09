# Claude Opus 5.5 — findings by Xing_4.0_29B_A4B

> Source: Anthropic, successor to Claude Opus 5 family (previous generations 4.1–5). Introduced 2026-09-22. Hosted via Claude Platform (`claude-opus-5-5`; `claude.ai`). API pricing follows standard tier; no Responses API variant.
> Date: 2026-11-09 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Next generation in Anthropic's Claude Opus family. Released September 22, 2026, following Claude Opus 5 (July 2026). Described as performing at the level of Claude Fable 5.1 on most work while costing 40% less to run than Opus 5. Leads in agentic coding and knowledge work evaluations at Anthropic's automated behavioral audit test suite (the company's alignment suite across ~2,000 scenarios).
- **Provider / access:** Anthropic (`anthropic`); Claude Platform API and web interface. Cloud partners include AWS, Google Cloud, Microsoft Azure. Uses safeguards: cybersecurity safeguards route cyber tasks back to Opus 4.8 by default, biology routes to Opus 4.8. CyVerification Program and Life Sciences Verification Program available. GitHub Copilot CLI integration mentions.
- **Release / knowledge:** Released September 22, 2026. System card available at `anthropic.com/claude-opus-5-5`. Tested pre-release by external evaluators Frontier Design and METR. CEO Dario Amodei issued a call to pace the frontier prior to Opus 5 release. Company filed Form S-1 with the SEC October 26, 2026 for proposed initial public offering.
- **IDs:** `claude-opus-5-5`; platform: `platform.claude.com/docs/en/models/overview`; web interface: `claude.ai`. Also known as Opus 5.5 (full marketing name, hyphenated vendor style per `tasks/sync-data.md`: `Claude_Opus_5.5_Informant`)
- **Context window:** Anthropic does not publish an explicit token limit for Opus 5.5. Speculation based on family modeling suggests ~200K–320K tokens. No verified public number.
- **Modalities:** Text. Previously confirmed Claude variants support vision inputs; Opus 5.5 was marketed as focused on agentic coding and knowledge work rather than extended multimodal — specifically stated in previous model documentation context: Opus models remain text-focused in current release. Confirmation: HF model card historical records (documented via Anthropic archive pages) confirm text-only Opus descriptions; no vision/audio output channels stated for Opus 5.5 specifically. Score capped by absence of documented multimodal input.
- **Pricing (as of 2026-11-09):** Standard tier, $4.00 per 1M input tokens, $20.00 per 1M output tokens. Cache reads $0.20 per 1M, cache writes $5.00 per 1M. Fast mode: $8 input, $40 output (2.5x speed). 40% less than Opus 5 equivalent cost per typical workloads. Also appeared in Paid historical contract tiers ($5/$25) — reporting now uses latest: $4/$20 input/output with specified cache rates.
- **Architecture:** MoE transformer-based (family architecture confirmed); released as part of Claude 5.5 family following pacing directive from Dario Amodei. Details on layered capacity unknown without full system card; estimated parameters are not officially published. Built for long-running agentic coding: architectural emphasis on efficient codebase audit, migration and verification workflows. Safeguards stack added for cybersecurity, biology, distillation response (fallback to Opus 4.8), prompt injection screening.

### Raw benchmarks found (primary vendor self-reported by Anthropic — presented at launch, one independent evaluator cited)

| Benchmark | Claude Opus 5.5 | Corroborating third party |
|---|---|---|
| Terminal-Bench 4.0 | 66.4% | no independent third-party run published |
| FrontierCode v1.1 | 54.4% | no independent third-party run published |
| CursorBench 4.0 | 57.8% | no independent third-party run published |
| GDPval-AA v2.1 | 1846 Elo | Zapier AutomationBench run (Zapier-led evaluation, flagged caveat noted) |
| HLE (Humanity's Last Exam) | 67.7% with tools | no independent third-party run published |
| AutomationBench | 40.0% | Zapier (evaluation completed during early access, see caveat) |
| OSWorld 2.1 | 81.8% partial | no independent third-party run published |
| Chartography | 89.0% with tools | no independent third-party run published |
| ARC-AGI 3 | strong (3x next best, unnamed) | internal Anthropic benchmark, no third-party verification |
| Human behavioral reasoning quality | 16/18 clean reports (internal test) | anecdotal report only |

> Independence caveat: every numeric row above comes from Anthropic self-reporting or Zapier (AutomationBench). Scores were tested pre-release by Frontier Design and METR, but scores themselves are vendor primary. No independent third-party reproductions exist for any metric in the official system card. Zapier AutomationBench was run during early access without fallback models, which affected results on cybersecurity tasks.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 86/100.** Anchors on Terminal-Bench 4.0 66.4% (anthropology over agentic tasks, top in pairwise comparison against GPT-6 Astra 57.9%, Fable 5.1 55.8%), Chartography 89.0% (visual chart recognition with tools, strongly positive), OSWorld 2.1 81.8% partial (computer use). SWE-bench family tasks are high-cap candidates but Anthropic already uses SWE-bench as supporting context. Each of the anchors is verified vendor-self-reported. SCORE CAPPED modestly because no independent re-run exists beyond Anthropic + Zapier for CybersecurityBench. Evidence: Anthropic Opus 5.5 system card release page (Terminal-Bench 4.0, CursorBench 4.0, OSWorld 2.1, Chartography).
- **Reasoning: 84/100.** Anchors: HLE (Humanity's Last Exam) 67.7% with tools (math reasoning), GDPval-AA v2.1 1846 Elo (real-world professional work across 44 occupations — the company's system card reports the highest gdp-case score in the Opus lineage), ARC-AGI 3 (internal benchmark reported 3x next-best competitor). SWE-bench variants (AIME, Tau-Chain) not separately self-reported here; extrapolated from code-agent benchmarks. SCORE CAPPED down because HLE math and general-problem-solving anchor best at 67.7; gap between Opus 5.5 and Fable 5.1 narrowing faster than self-reports suggest. Evidence: Anthropic Opus 5.5 system card release page.
- **Context window: 80/100.** Artificial Analysis Intelligence Index (v5.0.1) independently reports `Claude Opus 5.5 (Max, Default Fallback)` at **1M tokens context window** (same tier class "proprietary 1M+ tok", validated by `artificialanalysis.ai` model page `/models/claude-opus-5-5`), supporting the upper band over my earlier speculation. No explicit Anthropic page number; AA is the authoritative external confirmation. SCORE CAPPED modestly (AA first-token latency: 411.05s, median across comparable class: 12.86s; per-task time 25.4 min vs median 12.6 min — feasible for long-horizon agent work, Claude family footprint remains heavier than Gemini).
- **Multimodal: 20/100.** Text-only in Anthropic Claude platform. No image, audio, or video input channel mentioned for Opus 5.5 specifically. Conventional Claude upper-bound floor under project scale. Evidence: Anthropic Opus 5.5 release page; `claude.ai` interface description; Anthropic product page mention of "most capable small model".
- **Coding: 78/100.** Anchors: Terminal-Bench 4.0 66.4% (agentic terminal), FrontierCode v1.1 54.4% (codebase-wide agent migration), CursorBench 4.0 57.8% (cursor IDE agent). Combined with feedback narrative: early tester audited a 200,000-line codebase in <3h; reviewed a HAProxy Rust port faster and cheaper; provided interview-quality interviews. SCORE CAPPED down from vendor-reported terminal benchmark tops (Terminal-Bench 4.0 peaks at 66.4%, FrontierCode v1.1 plateau at 54.4%); union with CursorBench introduces variance. SWE-bench Verified not separately quantified. Evidence: Anthropic Opus 5.5 system card release page.
- **Cost efficiency: 25/100.** Input $4.00/1M, output $20.00/1M. Cache read $0.20/M (60% less than Opus 5). Fast mode $8/$40. Compared against open-weight ranges: non-zero for anyone, but models under $2/$5 in market are rare. Anthropic defines this as a baseline $20/$40 standard; competition at $0.50/$10 to $2/$5 is generational move in cheaper options. Cap reflects current benchmark set where Anthropic retains premium pricing. $0 / self-host remains absent. Evidence: Anthropic Opus 5.5 system card pricing table.
- **Overall Score: 69.6/100.** Mean of [Tool use 86 + Reasoning 84 + Context window 80 + Multimodal 20 + Coding 78] / 5 = 68.6. Cross-vendor anchor: Artificial Analysis Intelligence Index v5.0.1 independently confirms `Claude Opus 5.5 (Max, Default Fallback)` at #2 of 69 models with Intelligence Index of **59** (Carbon High=60 leads), price $4/$20 confirmed by AA endpoint, verified context ceiling 1M tokens per AA model page. Profile: Anthropic leadership coding agent benchmark suite at peak plus improved safety robustness; cheapest measured frontier Claude tier (comparable to OpenAI pricing strategy); moderate transparency and breadth. Best fit recommendation: remote developer onboarding where Anthropic Claude is trusted; GitHub Copilot CLI on Windows automation environment; finance team QA where Claude Fable equivalent confidence matters; legacy codebase migration jobs requiring current Anthropic API access with automatic fallback to Opus 4.8. Caveat: assume 68.6 ± 2 until peer-reviewed third-party reproductions appear for Terminal-Bench 4.0, FrontierCode v1.1, and CursorBench 4.0.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (anthropic)** — 2026-11-09
- Method: fresh public web research reading Anthropic official Opus 5.5 system card (`anthropic.com/claude-opus-5-5`), Claw-Eval-Free third-party corroboration unavailable — Anthropic benchmark self-report for SecurityBench 4.0, CursorBench 4.0, FrontierCode v1.1, GDPval-AA v2.1, HLE, Chartography, OSWorld 2.1, ARC-AGI 3. Where independent benchmark reproduction was not published, vendor self-reported scores used with a cap caveat. Zapier-led AutomationBench runs noted during early access with caveat about fallback treatment. Scores are normalized 1–100 interpretations, not Anthropic official scores; each number carries a source line. Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5_AA.md`, using the same headings.
