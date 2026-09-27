# GPT-Live-1 Astra — findings by Muse Spark 1.3

- Source: OpenAI/GPT-Live-1 with GPT-6 Astra backend (`gpt-live-1` + `gpt-6-astra`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Live-1 Astra (Astra-medium backend pairing)
- **Short description:** OpenAI full-duplex voice front-end that holds the live conversation while delegating deeper reasoning and tool calls to a backend text model. This folder covers the Astra-medium pairing for tool-heavy customer-service voice work.
- **Provider / access:** OpenAI API Live sessions endpoint only (model ID `gpt-live-1`); backend `gpt-6-astra` at medium reasoning effort in this variant. SIP, WebRTC, and WebSocket paths; 12 launch voices with sales-gated custom cloning.
- **Release / knowledge:** API release 2026-09-10 (first introduced in ChatGPT); knowledge cutoff 2025-07-31 per model docs.
- **IDs:** `gpt-live-1` (voice layer) paired with `gpt-6-astra` (backend); folder slug `gpt-live-1-astra` denotes the Astra-medium pairing.
- **Context window:** No verified public context window found for the voice layer; secondary docs report a 128K default Live session context (unverified); public maximum output not published.
- **Modalities:** Audio and text in/out; no image or video input; reasoning via delegated backend; function calling yes; structured outputs, fine-tuning, and predicted outputs not supported.
- **Pricing (as of 2026-09-27):** $0.05 per minute voice session billed per second, backend Astra tokens/tools/telephone billed separately; Artificial Analysis measured $5.83/hr input-audio with Astra medium ($4.47 with Sol low); rate-limited by concurrent sessions; no free tier.
- **Architecture:** Proprietary (no parameter count, license, or weights published).

### Raw benchmarks found

Agent / tool use:

- Tau-Voice agentic customer-service tasks, Astra medium (Artificial Analysis via third-party summary, Sep 2026): **67.9%** (vs Grok Voice Think Fast 2.0 High 56.5%; Sol-low pairing 59.3%)
- Full Duplex Bench v3 tool-calling Pass@1, Terra-low backend (OpenAI launch post 2026-09-10): **87.0%** (vs GPT-Realtime-2.1 60.0%, GPT-Realtime-2 58.0%)
- Full Duplex Bench v3 response quality (same source): **90.0%** (vs 88.0% / 81.0%)
- Full Duplex Bench v1.5 interactivity (same source): **80.1%** (vs 45.4% / 47.8%)
- Full Duplex Bench v1 turn-taking latency (same source): **0.798s** (vs 1.41s / 1.63s)
- Full Duplex Bench pauses/interruptions/backchannels (AA, Astra medium): **94.9%** (Sol low 97.3%, second overall behind Qwen Audio 3.0 Realtime Plus)
- Tau3 Voice intelligence Pass@1, Astra medium (OpenAI launch post): **86.2%** (vs GPT-Realtime-2.1 45.7%; community summary cites 83.6% on the same pairing)
- Tau Banking Voice knowledge over 97 tasks (same source): **32.0–38.1%** (vs 12.4% / 10.3%; range reflects launch-post chart vs community write-up)
- Terminal-Bench 2.1 (text): **no verified public score found** (voice harness differs)
- Tau3-Banking / Tau2-Bench (text): **no verified public score found** (Tau3 Voice above is the spoken counterpart)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Big Bench Audio reasoning from spoken prompts, Astra medium (AA via third-party summary, Sep 2026): **90.1%** (Sol low 89.0%; vs Grok 97.2%, Qwen 99.2%)
- AA Speech-to-Speech Quality Index, Astra medium (same source): **81.5, first place** (Sol low 80.1 third; vs Grok Voice Think Fast 2.0 High 81.3)
- Speech Agent Arena general task success, Astra medium (same source): **87.4%** (Sol low 90.9%; vs Grok 94.6%, GPT-Realtime-2.1 High 91.5%)
- Conversational Dynamics, Sol low (AA via launch coverage): **97.3%** (Astra medium 94.9%)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index (text) / BenchLM overall: **no verified public score found** (voice Index above is the speech composite, not the text Index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR / RULER / GraphWalks at window length: **no verified public score found** (128K session context is an unverified secondary-docs figure, not a retrieval score)
- Time to first audio, Astra medium (AA): **1.34s** (Sol low 1.24s; vs Grok 0.70s) — latency note, not a quality benchmark

### Normalized scores (1–100)

- **Tool use: 88/100.** Tau-Voice 67.9% leads the voice-agent field by 11 pts with 87% Full Duplex v3 tool calling and 86.2% Tau3 Voice; capped by delegation delay (0.798s–1.34s turn-start) and no text-harness tool numbers.
- **Reasoning: 85/100.** AA speech Index #1 at 81.5 with 90.1% Big Bench Audio shows strong delegated reasoning; capped by trailing Grok/Qwen on raw audio reasoning and Arena (87.4% vs 94.6%) plus no text GPQA/HLE/Index.
- **Context window: 65/100.** 128K unverified session context maps to the low end of the 100K–200K tier with upward provisional credit for full-duplex state handling; capped by unverified window size and zero retrieval measurement.
- **Multimodal: 90/100.** Audio plus text in/out with full-duplex interruption handling meets the audio tier floor (90–100); capped at the floor with no image/video input and no structured-output mode.
- **Coding: 50/100.** No verified coding benchmark found for this voice pairing; neutral provisional score capped by complete absence of SWE/LiveCode/DeepSWE evidence.
- **Cost efficiency: 65/100.** $0.05/min voice layer plus separately billed Astra backend ($5.83/hr measured) with no free tier; trails bundled per-minute voice pricing on headline cost once backend tokens are included.
- **Overall Score: 76/100.** Mean of the five quality dims (88+85+65+90+50)/5 = 75.6 → 76; best fit as a top composite voice front-end for tool-heavy support lines where the Astra backend justifies the extra latency and cost.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-27
- Method: public internet research (OpenAI launch post 2026-09-10, Artificial Analysis figures via alphasignal/benchlm/coursiv/dograh summaries 2026-09-10–18, OpenAI developer community write-up, AI Stack Current family profile); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
