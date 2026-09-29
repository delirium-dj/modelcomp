# Kimi K2.6 — findings by DeepSeek 4.1 Flash

- Source: Moonshot AI (`kimi-k2.6`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight agentic flagship — "state-of-the-art coding, long-horizon execution, and agent swarm capabilities." It scales horizontally to **300 sub-agents executing 4,000 coordinated steps**, and the vendor's launch evidence is built on multi-hour autonomous engineering runs (a Zig inference port and an overhaul of the 8-year-old `exchange-core` matching engine).
- **Provider / access:** Kimi.ai, the Kimi App, the Kimi API (`platform.kimi.ai`), Kimi Code; OpenCode Zen `kimi-k2.6`; third-party hosts DeepInfra, Fireworks, Novita, Together. Open weights are downloadable.
- **Release / knowledge:** Released **2026-04-20** (Moonshot tech blog), confirmed by llm-stats. Knowledge cutoff not stated on the sources reached.
- **IDs:** `kimi-k2.6` (Moonshot/Zen). **No Free ID exists** — the live Zen catalogue carries `kimi-k2.6` and `kimi-k2.7-code` but no `kimi-k2.6-free` (checked `https://opencode.ai/zen/v1/models`, 2026-09-29). Distinct from Kimi K2.5 (predecessor) and Kimi K2.7 Code (coding-tuned sibling) — not a rename of either.
- **Context window:** **262,144 (262.1K) input tokens**, verified by llm-stats. Max output varies by host: **131.1K** on DeepInfra and Together, **262.1K** on Fireworks/Moonshot/Novita.
- **Modalities:** text, image and video input; text output. Reasoning: yes (thinking mode; the blog documents a preserve-thinking setting). Tool use: yes, exercised at production scale in the agent-swarm evidence.
- **Pricing (as of 2026-09-29):** Moonshot AI **$0.95 in / $0.16 cached / $4.00 out** per 1M; **DeepInfra $0.75 / $3.50** is the cheapest tracked route; Novita $0.95/$0.16/$4.00; Fireworks $0.95/$4.00; Together $1.20/$4.50. Paid only, so no free-tier training-data caveat applies.
- **Architecture:** open-weight MoE, **1T total parameters**, Modified MIT Licence (permits self-hosting).

> **Note on provenance:** this file was re-created on 2026-09-29 after a concurrent external process removed it from the working tree along with the `claude-sonnet-5.5` file. Content is unchanged from the first write of the same date.

### Raw benchmarks found

Agent / tool use (official Kimi K2.6 benchmark table, vendor blog — K2.6 column with Kimi K3 / GPT-5.4 / Claude Opus 4.6 / Gemini 3.1 Pro for context):

- Terminal-Bench 2.0 (Terminus-2 harness): **66.7%** (K3 71.8, GPT-5.4 65.4, Opus 4.6 65.4, Gemini 3.1 Pro 61.9)
- Agent Swarm: **up to 300 sub-agents / 4,000 coordinated steps** (vendor capability claim, no benchmark score)
- The vendor also lists Humanity's Last Exam (full, with tools), BrowseComp, DeepSearchQA (F1), Toolathlon and OSWorld-Verified; Claw Eval v1.1 (max-tokens-per-step 16384) and APEX-Agents (452 of 480 public tasks) are documented as *methods* — **no per-benchmark number for those rows could be extracted from the page fetch, so they count as no verified score.**

Reasoning / knowledge (official vendor table):

- Humanity's Last Exam: **54.0** (K3 58.7, GPT-5.4 52.1, Opus 4.6 53.0)
- GPQA Diamond: **88.4** (K3 91.2, GPT-5.4 89.6, Opus 4.6 88.8)
- AIME 2026: **93.3** (K3 96.7, GPT-5.4 95.0)
- Vision rows exist (MathVision with python, V* with python, MMMU-Pro; max-tokens 98,304 avg@3) but **no values could be extracted — no verified score.**

Coding (official vendor table):

- **SWE-Bench Pro: 58.6** (K3 63.4, GPT-5.4 57.7, Opus 4.6 54.2, Gemini 3.1 Pro 49.5)
- Terminal-Bench 2.0: **66.7**
- Harness disclosure (important for comparability): SWE-bench-family runs use an **in-house framework adapted from SWE-agent** (bash/createfile/insert/view/strreplace/submit tools), **averaged over 10 independent runs**; TB2.0 uses Terminus-2 with the provided JSON parser in preserve-thinking mode.
- Long-horizon agentic evidence (vendor narrative, no benchmark): deployed Qwen3.5-0.8B locally on a Mac while optimizing inference **in Zig** across 4,000+ tool calls, 12+ hours and 14 iterations, lifting throughput ~15 → ~193 tok/s (~20% faster than LM Studio); and autonomously overhauled `exchange-core` over a 13-hour run with 1,000+ tool calls and 4,000+ modified lines, achieving +185% medium and +133% peak throughput.

Long context:

- 262,144-token window verified; **no MRCR / RULER / GraphWalks retrieval score is published** — the vendor claims a "significant leap in long-context tasks" without a number, and documents context-management strategies (discard-all, hide-tool-result) used to fit BrowseComp/DeepSearchQA/WideSearch.

Serving behaviour:

- p95 TTFT **2.17 s** via DeepInfra over the trailing 7 days (llm-stats); output floor ~18.9 char/s p95 on Moonshot, 17 char/s on DeepInfra.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.0 at 66.7% is competitive with Opus 4.6 and GPT-5.4 and the agent-swarm capability is uniquely evidenced at production scale (300 sub-agents, multi-hour runs), but 66.7% sits well under the ~88% TB2.1 frontier reference and no Tau3, GDPval, Claw-Eval or Toolathlon number could be verified.
- **Reasoning: 88/100.** GPQA Diamond 88.4% is close to the 90%+ frontier reference, HLE 54.0 clears the 40%+ bar on the full set, and AIME 2026 93.3 is elite — capped only by the absence of an Intelligence Index or long-context retrieval number.
- **Context window: 78/100.** 262,144 tokens lands in the 200K–500K tier (65–84, 200K = 70); it earns the upper half because max output is genuinely large (131.1K–262.1K depending on host, far above the 64K caveat threshold) with no retrieval-at-length proof to justify more.
- **Multimodal: 78/100.** Text + image + video input with text output puts it in the 75–90 "+video/PDF in" band; no audio input, no non-text output, and no extractable vision-accuracy number keeps it well below 90.
- **Coding: 88/100.** SWE-Bench Pro 58.6 beats GPT-5.4 and Opus 4.6 on the vendor's own table, and the long-horizon runs are the strongest published evidence of sustained repository-level work — but the in-house SWE-agent harness and missing SWE-bench Verified/LiveCodeBench/DeepSWE rows keep it out of the mid-90s.
- **Cost efficiency: 88/100.** $0.95 in / $0.16 cached / $4.00 out on Moonshot and $0.75/$3.50 on DeepInfra sit right at the ~$1.25/$4.25 ≈ 88 anchor with a deep cache discount; paid-only caps it there.
- **Overall Score: 83.4/100.** Mean of the five quality dims (85 + 88 + 78 + 78 + 88) / 5 = 83.4; Cost excluded per `RULES.md`. Best fit: long-horizon open-weight agentic coding and multi-agent orchestration where you need downloadable weights and will accept a 262K window.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-29
- Method: public internet research (Moonshot "Kimi K2.6: Advancing Open-Source Coding" tech blog — official benchmark table values, harness/run-count footnotes, agent-swarm limits, long-horizon case studies, context-management disclosures, model availability surfaces; llm-stats Kimi K2.6 page 2026-09-29 — 2026-04-20 release, Modified MIT, 1T MoE, 262.1K context, per-provider max output and pricing, DeepInfra p95 TTFT 2.17 s; OpenCode Zen live catalogue — `kimi-k2.6` present, no free variant). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
