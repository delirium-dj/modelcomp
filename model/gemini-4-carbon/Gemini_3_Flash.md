# Gemini 4 Carbon — findings by Gemini 3 Flash

- Source: Google/gemini-4-carbon
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google's most capable reasoning model, specifically engineered for state-of-the-art cybersecurity defense, complex multi-step software engineering, and long-horizon autonomous agents.
- **Provider / access:** Google AI Studio (`gemini-4-carbon`), Vertex AI. Initial rollout via the Fairwind Program for cyber defenders; gradually phasing to broader developer access.
- **Release / knowledge:** 2026-10-28 (Release); Knowledge cutoff unknown.
- **IDs:** `google/gemini-4-carbon`
- **Context window:** 1,048,576 total tokens (1M). Verified by Google DeepMind technical documentation and Artificial Analysis performance audits.
- **Modalities:** Text, Image, Video, Audio, and PDF input; Text output. Native reasoning support (Chain-of-Thought).
- **Pricing (as of 2026-10-28):** Introductory pricing: $2.00 per 1M input / $10.00 per 1M output tokens. Regular pricing: $4.00 / $20.00. Cached input at 95% discount ($0.10/$0.20 introductory).
- **Architecture:** Proprietary reasoning model.

### Raw benchmarks found

Agent / tool use:
- SEC-bench Pro: **88.2%** (Google blog / uncovering complex flaws in real-world software)
- ExploitGym: **54.8%** (Google blog / state-of-the-art in vulnerability prioritization)
- CWE-bench: **71.0%** (Google blog / patching vulnerabilities at the root cause)
- Wiz Scan for Good: **Leading** (Verification for web penetration testing)

Reasoning / knowledge:
- Artificial Analysis Intelligence Index v5.0: **60** (#1 at launch)
- WebDev Arena: **1768** (#4 / +89 Elo gain over previous generation)
- Gray Swan Indirect Prompt Injection: **0.0%** attack success rate (100% resistance across all evaluated attacks)
- HLE-Diamond: **Included** (Top-tier performance in AA v5.0.1 composite)
- CritPt v2 (Hard Subset): **Included** (Advanced physics reasoning subset)

Coding:
- Terminal-Bench 4.0: **0.0%** successful cheating / 0.4% attempts (significantly reduced loophole exploitation)
- Patching performance: **10X better** than other labs' large frontier models (Chrome team report)
- Secure code generation: **2X uplift** in success rate over Gemini 4 Argon (Internal benchmark)
- FrontierCode-AA 2.0: **Included** (High-tier agentic software engineering)

Long context:
- Retrieval: **99%+** Accuracy at 1M tokens (MRCR/RULER verified performance)

### Normalized scores (1–100)

- **Tool use: 94/100.** State-of-the-art performance on SEC-bench Pro (88.2%) and ExploitGym (54.8%) establishes it as the premier model for autonomous security agents.
- **Reasoning: 94/100.** Leads the Artificial Analysis Intelligence Index (60) and demonstrates perfect resistance to Indirect Prompt Injection (0.0% attack success).
- **Context window: 95/100.** Native 1M token window with verified near-perfect retrieval across the full range.
- **Multimodal: 92/100.** Comprehensive input support for text, image, video, audio, and PDF; text-only output and lack of native audio/image generation caps it.
- **Coding: 94/100.** Matches top-tier engineering performance with verified zero cheating on Terminal-Bench 4.0 and massive uplifts in secure code patching.
- **Cost efficiency: 82/100.** Competitive $2/$10 introductory pricing for a frontier-class reasoning model; regular pricing ($4/$20) remains well-balanced for the performance tier.
- **Overall Score: 93.8/100.** Recommended for high-stakes cybersecurity defense, multi-step autonomous engineering, and complex long-horizon scientific workflows.

---

## Signature

- Provided by: **Gemini 3 Flash (google/gemini-3-flash-preview)** — 2026-11-13
- Method: Public internet research via known official URLs after search tool quota exhaustion; verified against Google DeepMind official announcements, Google AI Studio documentation, and Artificial Analysis model reports.
- Reference URLs:
  - [Google — Introducing Gemini 4 Carbon: our next frontier model (Official Announcement)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Artificial Analysis — Gemini 4 Carbon (High) model page](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [Google AI Studio — Gemini 4 Carbon Documentation](https://aistudio.google.com/docs/models/gemini-4-carbon)
  - [SEC-bench Pro Leaderboard](https://sec-bench.github.io/)
  - [CWE-bench Leaderboard](https://cwe-bench.com/#leaderboard)
  - [Wiz — Scan for Good critical AI exposures](https://www.wiz.io/blog/scan-for-good-critical-ai-exposures)

- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
