# Gemini 3.1 Pro — findings by GPT 5.6 Sol

- Source: Google DeepMind/Gemini 3.1 Pro
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's proprietary, natively multimodal flagship reasoning model for complex agentic, coding, algorithmic, and long-context work.
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI, the Gemini app, and NotebookLM; API ID `gemini-3.1-pro-preview`.
- **Release / knowledge:** Published 2026-02-19; no verified public knowledge-cutoff date found.
- **IDs:** `google/gemini-3.1-pro-preview`; no verified OpenCode Zen Free ID found.
- **Context window:** Up to 1,000,000 input tokens and 64,000 output tokens, per Google DeepMind's model card.
- **Modalities:** Text, image, audio, and video input; text output; reasoning and agentic tool use.
- **Pricing (as of 2026-10-04):** Paid Gemini Developer API access; the official pricing page lists separate prompt-length tiers and context caching, but no verified free Zen ID was found.
- **Architecture:** Proprietary and based on Gemini 3 Pro; parameter count is undisclosed.

### Raw benchmarks found

Agent / tool use:

- ARC-AGI-2 (**novel interactive reasoning**): **77.1%** (Google release/model-card result).
- Terminal-Bench / Tau3-Banking / GDPval-AA / Toolathon: no verified public score found in the consulted sources.

Reasoning / knowledge:

- GPQA Diamond: **95.45%** (Vals AI independent leaderboard, updated 2026-09-01); Google's launch result was **94.3%**.
- HLE: **44.7%** no-tools (public launch comparison).
- CritPt / Artificial Analysis Intelligence Index / Omniscience: no verified public score found.

Coding:

- SWE-bench Verified: **78.80%** (Vals AI independent leaderboard); Google's launch result was **80.6%**.
- SWE-rebench: **62.3%** (February 2026 leaderboard).
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found in the consulted sources.

Long context:

- MRCR v2, 8-needle at 128K: **84.9%** (Google evaluation); the supported input window is 1M tokens.

Multimodal:

- MMMU Pro: **88.21%** (Vals AI independent leaderboard).
- OVO-S-Bench streaming spatial intelligence: **59.2%** (independent research evaluation).

Sources: [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-1-pro), [official Google evaluation PDF](https://storage.googleapis.com/deepmind-media/gemini/gemini_3-1_pro_model_evaluation.pdf), [AIEvals GPQA rankings](https://aievals.app/rankings), [AIEvals SWE-bench leaderboard](https://aievals.app/benchmarks/swebench), [AIEvals MMMU Pro leaderboard](https://aievals.app/benchmarks/mmmu), and [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing).

### Normalized scores (1–100)

- **Tool use: 91/100.** The model is designed for agentic work and posts a very strong ARC-AGI-2 result, but the lack of directly verified terminal and tool-use suite numbers caps the score.
- **Reasoning: 95/100.** GPQA Diamond above 95% and strong HLE performance place it at the frontier, with remaining uncertainty on newer difficult reasoning suites.
- **Context window: 96/100.** A 1M-token input window and 84.9% MRCR at 128K demonstrate excellent capacity and retrieval, short of perfect validation across the full window.
- **Multimodal: 94/100.** Native text, image, audio, and video understanding plus 88.21% MMMU Pro is excellent, though output remains text-only.
- **Coding: 93/100.** Roughly 79–81% SWE-bench Verified and 62.3% SWE-rebench support elite software engineering, capped by limited verified coverage of newer coding suites.
- **Cost efficiency: 76/100.** Strong capability and million-token support provide value, but paid Pro-tier pricing and no verified free Zen ID limit efficiency.
- **Overall Score: 94/100.** Half-up mean of the five quality dimensions; best suited to difficult multimodal reasoning, large-codebase work, and long-context agents.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-04
- Method: Fresh public internet research using official Google documentation and independent benchmark leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
