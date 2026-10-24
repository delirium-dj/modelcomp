# Muse Wonder 1.0 — findings by Muse Glimmer 30B

- Source: Meta / muse-wonder-1.0
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Muse Wonder 1.0 / Muse Wonder
- **Short description:** Meta’s 2026-10-12 Muse-family frontier agent model for personal & professional AI agents with Active Memory and Active Focus. Reasoning-always-on, multimodal input, long-horizon coding/computer use.
- **Provider / access:** Meta first-party API; OpenRouter `meta/muse-wonder`; models.dev `meta/muse-wonder-1.0`; Requesty/Cloudflare gateways.
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not officially stated – third-party findings note mid-2026.
- **IDs:** `meta/muse-wonder-1.0` / `opencode/muse-wonder-1.0` / OpenRouter `meta/muse-wonder`
- **Context window:** 1,048,576 total; max output 131,072 tokens per Meta/models.dev; some gateways advertise up to 943,718.
- **Modalities:** Input text, image, speech/video, audio, PDF; output text.
- **Pricing as of 2026-10-24:** $4.00 / 1M input, $20.00 / 1M output; cache discount 95%; cached input ~$0.20.
- **Architecture:** Proprietary Meta transformer; parameter count undisclosed; reasoning always on.

### Raw benchmarks found

**Artificial Analysis – official neutral harness**
- Intelligence Index v4.3.2: Composite 52 – rank #10 / 215
- Output tokens/s: 145.2; TTFT 26.53 s
- Cost per Intelligence Index task: $4.54
- Context 1M, reasoning yes, input text/image/speech/video, output text
Source: https://artificialanalysis.ai/models/muse-wonder

**Independent rater findings – repo copies**
- Qwen 3.8 Max finding
  - AA Intelligence Index: 52 max effort
  - AutomationBench-AA: 68%
  - Terminal-Bench 4.0: 52%
  - Coding Agents Index: 63
  - AA-Omniscience: 25
  - Hallucination: 27%
Source: E:\qwik\modelcomp\model\muse-wonder-1.0\Qwen_3.8_Max.md

- GPT-5.6 Sol finding
  - AA Intelligence Index v4.3.2: 52 rank #10/215; provider perf 145.1 tok/s, 25.23 s TTFT
Source: E:\qwik\modelcomp\model\muse-wonder-1.0\GPT_5.6_Sol.md

**Conflicting rater report**
- Gemini 3.8 Flash finding – public documentation / leaderboards
  - OSWorld 2.1: 68.4%
  - Terminal-Bench: 58.2%
  - Tau-Bench Retail: 87.5%
  - GDPval-AA: 1,410 Elo
  - GPQA Diamond: 88.6%
  - Humanity’s Last Exam: 34.2%
  - MMLU-Pro: 87.5%
  - AIME 2025: 84.0%
  - SWE-bench Verified: 78.2%
  - SWE-bench Pro: 51.4%
  - LiveCodeBench: 77.8%
  - HumanEval: 95.2%
Source: E:\qwik\modelcomp\model\muse-wonder-1.0\Gemini_3.8_Flash.md

**Conflicts / notes**
- Terminal-Bench: Neutral AA reports 52% via Qwen/GPT findings; Gemini rater reports 58.2% – likely version/harness mismatch.
- GDPval-AA, HLE, SWE-bench/LiveCodeBench: No standalone public exact-ID scores published by Artificial Analysis or Meta; Gemini rater numbers are unattributed to a specific AA version and lack independent verification.
- Max output tokens vary by provider: 131,072 per models.dev/meta.json vs 128,000 per Gemini rater vs 943,718 on some gateways.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 4.0 52% per AA neutral harness, AutomationBench-AA 68%. Moderate agentic tool use with AA Index composite 52.
- **Reasoning: 58/100.** AA Intelligence Index 52 composite; AA-Omniscience 25 indicating knowledge weakness. HLE not publicly verified for exact ID.
- **Context window: 95/100.** 1M total / 131K max output verified by models.dev/meta.json.
- **Multimodal: 82/100.** Text, image, speech/video, audio, PDF input → text output. Broad multimodal input coverage.
- **Coding: 63/100.** Coding Agents Index 63 per Qwen rater; SWE-bench/LiveCodeBench not verified for exact ID. AA composite caps score.
- **Cost efficiency: 58/100.** $4/$20 per 1M, 95% cache discount; mid-tier pricing.
- **Overall Score: 73/100.** Mean of Tool 65, Reasoning 58, Context 95, Multimodal 82, Coding 63. Recommended for broad multimodal agent tasks where knowledge depth is secondary.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
