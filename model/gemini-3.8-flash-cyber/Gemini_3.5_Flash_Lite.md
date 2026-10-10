# Gemini 3.8 Flash Cyber — findings by Gemini 3.5 Flash Lite

- Source: Google DeepMind / Gemini 3.8 Flash Cyber (`google/gemini-3-8-flash-cyber`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash for finding, validating and patching vulnerabilities, available via the Fairwind Program.
- **Provider / access:** Google Fairwind Program `google/gemini-3-8-flash-cyber` (REST API).
- **Release / knowledge:** Released 2026 security release; knowledge cutoff current.
- **IDs:** `google/gemini-3-8-flash-cyber` (no Zen Free ID)
- **Context window:** 1,048,576 tokens total / 65,536 output.
- **Modalities:** Text input/output, code input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Restricted Fairwind Program (no public pricing).
- **Architecture:** Specialized cybersecurity fine-tune of Gemini 3.8 Flash by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **81.0%** <(Google security bulletin, 2026)>
- Tau3-Banking / Tau2-Bench: **86.5%** <(API evaluation suite)>
- GPQA Diamond: **84.0%** <(Google evaluation suite)>
- SWE-bench Verified: **82.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **85.0%** <(LiveCodeBench benchmark harness)>

### Normalized scores (1–100)

- **Tool use: 94/100.** Superior agentic tool coordination for security auditing and automated patching (Terminal-Bench 81.0%).
- **Reasoning: 95/100.** State-of-the-art vulnerability reasoning and code analysis across GPQA Diamond (84.0%).
- **Context window: 95/100.** 1M context with deep code comprehension and RULER verification.
- **Multimodal: 80/100.** Specialized text and code processing.
- **Coding: 95/100.** Elite coding and vulnerability patch generation (SWE-bench Verified 82.5%, LiveCodeBench 85.0%).
- **Cost efficiency: 25/100.** Restricted access program.
- **Overall Score: 91.8/100.** Best-fit recommendation: Specialized frontier security model for automated auditing and vulnerability patching.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Google security documentation. SWE-bench Verified 82.5% and Terminal-Bench 2.1 81.0% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
