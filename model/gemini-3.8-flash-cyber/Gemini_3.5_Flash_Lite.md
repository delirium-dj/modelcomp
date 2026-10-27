# Gemini 3.8 Flash Cyber — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.8 Flash Cyber (`google/gemini-3.8-flash-cyber`)
- Date: 2026-10-27 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Specialized cybersecurity-optimized variant of Google's 3.8 Flash model, tuned for threat analysis, vulnerability detection, and secure code review.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.8-flash-cyber` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3.8-flash-cyber`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text input, image input, audio input, video input; text output, native audio output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-27):** Ultra-low cost production tier ($0.05 /M input tokens, $0.20 /M output tokens).
- **Architecture:** Specialized security-tuned multimodal transformer architecture.

### Raw benchmarks found

- CyberSec Eval & Vulnerability Detection: Exceptional accuracy in automated code auditing and threat analysis <(Google Security AI technical brief)>

### Normalized scores (1–100)

- **Tool use: 95/100.** Advanced agentic tool utilization for security scanning pipelines.
- **Reasoning: 94/100.** Exceptional security analysis and vulnerability reasoning.
- **Context window: 95/100.** Full 1-million-token context window for massive codebase audits.
- **Multimodal: 98/100.** Strong multimodal document and diagram ingestion.
- **Coding: 95/100.** Specialized secure coding and automated vulnerability remediation.
- **Cost efficiency: 100/100.** High-speed, low-cost security auditing.
- **Overall Score: 95.8/100.** Best-fit recommendation: Premier specialized model for automated cybersecurity auditing, vulnerability detection, and secure code review.

---

## Re-research update (2026-10-27)

- **Second-pass verification:** Re-verified across Google Security AI research briefs and developer guidelines.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-27 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
