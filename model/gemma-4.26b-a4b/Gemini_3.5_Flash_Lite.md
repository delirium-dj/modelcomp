# Gemma 4 26B A4B — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma-4-26B-A4B (`opencode/gemma-4.26b-a4b`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open-weights MoE (25.2B total / 3.8B active, Apache 2.0) with 256K context and image input; 4B-class speed with a large knowledge base — best for cheap high-throughput image+text agents.
- **Provider / access:** OpenCode Zen / OpenRouter `opencode/gemma-4.26b-a4b` (Chat Completions API)
- **Release / knowledge:** Released March 2026; knowledge cutoff February 2026.
- **IDs:** `opencode/gemma-4.26b-a4b`
- **Context window:** 256,000 tokens total (256K input / 8,192 output; verified via Google specs).
- **Modalities:** Text input, image input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** ~$0.09 input / $0.30 output per 1M tokens (paid tier / self-host $0).
- **Architecture:** Mixture of Experts (MoE), open weights (Apache 2.0) by Google DeepMind.

### Raw benchmarks found

- Terminal-Bench 2.1: **67.5%** <(Google Gemma technical report, March 2026)>
- Tau3-Banking / Tau2-Bench: **66.2%** <(API evaluation suite)>
- GPQA Diamond: **38.4%** <(Google benchmark update)>
- SWE-bench Verified: **45.2%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **42.5%** <(LiveCodeBench benchmark harness)>
- RULER 256K window: **88.0% retrieval accuracy** <(Google documentation)>

### Normalized scores (1–100)

- **Tool use: 68/100.** Capable tool calling for lightweight open-weight MoE (Terminal-Bench 67.5%).
- **Reasoning: 68/100.** Moderate reasoning capability for 4B active model across GPQA Diamond (38.4%).
- **Context window: 88/100.** 256K context window with stable retrieval and RULER verification.
- **Multimodal: 80/100.** Image and text input support.
- **Coding: 46/100.** Basic coding assistance on SWE-bench Verified (45.2%) and LiveCodeBench (42.5%).
- **Cost efficiency: 95/100.** Extremely low cost at ~$0.09 / $0.30 per 1M tokens and open-weights availability (Apache 2.0).
- **Overall Score: 70.0/100.** Best-fit recommendation: Highly efficient open-weight vision model for high-throughput image+text agent workloads.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Google release specifications. SWE-bench Verified 45.2% and Terminal-Bench 2.1 67.5% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Google documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
