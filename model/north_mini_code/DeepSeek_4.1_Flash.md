# North Mini Code — findings by DeepSeek 4.1 Flash

- Source: Cohere / North Mini Code 1.0 (`opencode/north_mini_code`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's inaugural North-family open-weights coding model — a 30B-A3B sparse MoE built for agentic software engineering, code generation and terminal tasks, released 2026-06-09 under Apache 2.0.
- **Provider / access:** Free on OpenCode Zen (`opencode/north_mini_code`; BenchmarkList also lists a `north-mini-code:free` route) and on Hugging Face (`CohereLabs/North-Mini-Code-1.0`, bf16/fp8/w4a16), OpenRouter and Cohere Model Vault. Chat-completions style; supports interleaved thinking and JSON-schema tool calls.
- **Release / knowledge:** Released 2026-06-09 (Cohere blog + HF card; some catalogues stamp the blog repost as 2026-06-17). Knowledge cutoff not published.
- **IDs:** `opencode/north_mini_code`; upstream `CohereLabs/North-Mini-Code-1.0`.
- **Context window:** 256K tokens (256,000) with 64K max output — the HF model card and the recommended OpenCode config both list `context: 256000, output: 64000`.
- **Modalities:** Text in / text out only (code-focused). Reasoning (interleaved thinking, best left on), tool calls, JSON/structured outputs. No image/audio/video.
- **Pricing (as of 2026-10-03):** **$0 input / $0 output** per 1M on the free routes (BenchmarkList and Sophon both list $0.00/$0.00).
- **Architecture:** Open-weights Mixture-of-Experts, 30B total / 3B active parameters, Apache 2.0. Runs locally via transformers or vLLM.

### Raw benchmarks found

> Every number below is traceable to a named source; the vendor run uses the SWE-agent v1.1.0 harness (SWE-Bench), a ReAct single-terminal-tool harness (Terminal-Bench v2) and Terminus-2 (Terminal-Bench Hard).

Agent / tool use:

- Terminal-Bench 2.1: **35.6%** (BenchmarkList, #92/182, 50th percentile)
- Terminal-Bench Hard: **31.1%** (BenchmarkList/Sophon, #72/326; vendor Terminus-2 run)
- Terminal-Bench 2.0 (v2): **36.0%** (vendor, ReAct harness)
- Tau2-Bench Telecom: **37.4%** (BenchmarkList, #161/332)
- Tau3-Banking: **6.4%** (BenchmarkList, #121/174)
- GDPval-AA: **543 Elo** (BenchmarkList, #215/340; field leader O-5 1861)
- AA-Briefcase: **240** (BenchmarkList, #49/56)

Reasoning / knowledge:

- GPQA Diamond: **75.7%** (BenchmarkList/Sophon, #166/464)
- HLE: **11.1%** (BenchmarkList/Sophon, #164/466)
- IFBench: **57.6%** (Sophon)
- Artificial Analysis Intelligence Index: **20.2** (BenchmarkList, #167/418)
- ECI: **112.41** (#145/354, open-weight comparison #63/147)

Coding:

- SWE-bench Verified: **67.6%** (vendor SWE-agent harness; LLM Reference peer set #69/81)
- SWE-bench Pro: **40.2%** (vendor; LLM Reference peer set #43/46)
- SciCode: **38.2%** (BenchmarkList) / **38.8%** (Sophon)
- DuelLab GameBench 2: **27.0** (BenchmarkList, #45/48)
- LiveCodeBench v6: run in the vendor methodology; value not published in the card text I could read

Long context:

- AA-LCR: **36.0%** (BenchmarkList, #224/409)
- Context is catalogued at 256K (64K out); no RULER/MRCR retrieval curve published.

### Normalized scores (1–100)

- **Tool use: 48/100.** Terminal-Bench 2.1 35.6% and TB-Hard 31.1% sit below the mid band (TB2.1 45–60% → 50–70) and GDPval-AA 543 Elo is far under the ~900–1200 mid reference; agentic-for-its-size via SciCode, but the terminal/agent numbers cap it.
- **Reasoning: 60/100.** GPQA Diamond 75.7% is the bright spot (upper mid), but HLE 11.1% and AA Intelligence Index 20.2 hold it in the mid band (GPQA 60–80% → 55–65).
- **Context window: 73/100.** 256K total is the 200K–500K tier (200K = 70), interpolating to ~73; 64K max output noted as a caveat, not a separate score.
- **Multimodal: 15/100.** Text-in / text-out only (code-specialised); no image, audio or video input.
- **Coding: 70/100.** SWE-bench Verified 67.6% is solid mid-tier and SciCode 38.2–38.8% is just under the 40% mid line, but SWE-bench Pro 40.2% (#43/46 in its peer set) and Terminal-Bench 2.1 35.6% cap it below the frontier coding band.
- **Cost efficiency: 100/100.** $0 input / $0 output on the free HF/OpenRouter/OpenCode routes.
- **Overall Score: 53/100.** (48 + 60 + 73 + 15 + 70) / 5 = 53.2 → **53**. Best-fit: a free, self-hostable Apache-2.0 coding sub-agent for terminal edits and code generation when mid-tier agent accuracy is acceptable.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-03
- Method: independent public internet research (Cohere blog + HF model card, LLM Reference, BenchmarkList, Sophon, Artificial Analysis via aggregators). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
