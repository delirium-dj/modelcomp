# GPT 5.3 Codex — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.3-Codex (`openai/gpt-5.3-codex`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed from OpenAI's launch post + independent suites: **Terminal-Bench 2.0 77.3%**, **OSWorld-Verified 64.7%**, τ²-bench 86%, Cybersecurity CTF 77.6%, **SWE-Lancer IC Diamond 81.4%**, GDPval (wins/ties) 70.9%; **AA-GPQA Diamond 91.5%**, AA-HLE 42.5%, AA-Omniscience accuracy 52.9%, CritPt 16.9%, AA-IFBench 75.4%; **SWE-bench Verified 85%** (system card), SWE-bench Pro (public) 56.8%, SWE-Rebench 58.2%, **Vibe Code Bench 61.77%**, LiveCodeBench 87.3%, SWE-bench (Vals) 78.0%; AA-LCR 83.3%; AA-MMMU-Pro 78.5%. Independent: AA Intelligence Index **33 (estimated)**, BenchLM overall 59.87 (#51/891), Vals rows via BenchLM.
> **Conflicts surfaced:** (1) **Release** — Feb 5, 2026 (OpenAI/AA) vs Feb 24, 2026 (OpenRouter). (2) **BenchLM overall** — 59.87/100 #51/891 (page) vs 60.9/100 #49/218 (search snippet). (3) **AA Index** — 33 (AA page) vs 32.5% (BenchLM copy); AA marks it "Estimated". (4) The prior file's "no exact public percentage" for TB 2.0/OSWorld/SWE-bench Pro is now resolved by the launch table.
> **Adjusted dimensions:** Tool 86→87 and Coding 88→90 (TB 2.0 77.3%, OSWorld 64.7%, SWE-bench Verified 85% and Vibe Code 61.77% are now public); Overall 82 → **83**.
> Sources: https://openai.com/index/introducing-gpt-5-3-codex/ · https://benchlm.ai/models/gpt-5-3-codex · https://artificialanalysis.ai/models/gpt-5-3-codex · https://openrouter.ai/openai/gpt-5.3-codex/benchmarks

## Model card

- **Name:** GPT 5.3 Codex
- **Short description:** OpenAI's most advanced agentic coding model — GPT-5.2-Codex's software-engineering ability combined with GPT-5.2's broader reasoning, with state-of-the-art SWE-bench Pro, strong Terminal-Bench 2.0 / OSWorld-Verified, and enhanced cybersecurity awareness. ~25% faster and more token-efficient than prior Codex models.
- **Provider / access:** OpenAI API plus OpenRouter and Vercel AI Gateway; codex CLI/cloud workflows. Not open weights.
- **Release / knowledge:** Released 2026-02-05 (OpenRouter lists 2026-02-24); knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.3-codex` (OpenAI/OpenRouter); OpenCode Zen `opencode/gpt-5.3-codex`. No Zen Free ID.
- **Context window:** 400K tokens input; max output 128K (LLM-Stats/AA).
- **Modalities:** text and image in; text out. Reasoning yes (effort tiers incl. xhigh), tool use, structured outputs, interactive steering during long-running execution.
- **Pricing (as of 2026-10-11):** **$1.75 / $14 per 1M** in/out (OpenRouter/AA; 90% cache discount).
- **Architecture:** proprietary decoder-only, coding-specialised; co-designed/served on NVIDIA GB200 NVL72. Not released.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (OpenAI); OSWorld-Verified **64.7%**; Cybersecurity CTF 77.6%; SWE-Lancer IC Diamond 81.4%
- τ²-bench 86% (AA); GDPval (wins/ties) 70.9%; Gert Labs 57.47%; JobBench 33.7%
- Claw-Eval / Toolathlon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- AA-GPQA Diamond **91.5%**; AA-HLE 42.5%; AA-Omniscience accuracy 52.9% / index 10.9%; CritPt 16.9%; AA-IFBench 75.4%
- Artificial Analysis Intelligence Index **33** (estimated); BenchLM overall 59.87 (#51/891)

Coding:

- SWE-bench Verified: **85%** (system card); SWE-bench Pro (public) 56.8%; SWE-Rebench 58.2%; SWE-bench (Vals) 78.0%
- Vibe Code Bench **61.77%**; LiveCodeBench 87.3%; Design Arena Website 1167 Elo

Long context:

- AA-LCR **83.3%**; 400K-token window documented; no MRCR/RULER/GraphWalks retrieval score published.

Multimodal:

- AA-MMMU-Pro 78.5% (text+image in, text out).

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.0 77.3%, OSWorld-Verified 64.7%, τ²-bench 86%, CTF 77.6% and GDPval 70.9% (now public) put it high; capped below 90 by the absence of a Tau3-Banking/GDPval-AA figure.
- **Reasoning: 90/100.** GPQA 91.5%, HLE 42.5% and AA-LCR 83.3% are frontier-class knowledge/reasoning results.
- **Context window: 80/100.** 400K tokens sits in the 200K–500K band (200K = 70, 500K = 85).
- **Multimodal: 68/100.** Text and image input, text output (`+image band = 60–70`); no audio/video documented.
- **Coding: 90/100.** SWE-bench Verified 85%, SWE-bench Pro 56.8%, Vibe Code Bench 61.77% and LiveCodeBench 87.3% are frontier-class (raised from 88 now that the launch table is public); capped by SWE-Rebench 58.2%.
- **Cost efficiency: 70/100.** $1.75 / $14 per 1M is mid-frontier pricing (between the $1.25/$4.25 (~88) and $3/$15 (~60) references), partly offset by its token efficiency.
- **Overall Score: 83/100.** (87 + 90 + 80 + 68 + 90) / 5 = 83.0 → 83. Best fit: professional long-horizon agentic coding, debugging and deployment.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: deep second-pass public internet research (OpenAI GPT-5.3 Codex launch post, BenchLM model page + per-eval results, Artificial Analysis, OpenRouter, LLM-Stats). The vendor-claimed rows the prior file could not capture are now quantified; the release-date and index discrepancies are surfaced. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.3_Codex_Spark.md`, using the same headings.
