# gpt-oss-120b — findings by DeepSeek 4.1 Flash

- Source: OpenAI / gpt-oss-120b (`gpt-oss-120b`; tracked Zen id `opencode/gpt-oss-120b`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** gpt-oss-120b (OpenAI's largest open-weight release; a smaller gpt-oss-20b sibling exists)
- **Short description:** OpenAI's flagship open-weights reasoning model — a 117B-total / 5.1B-active mixture of experts under Apache 2.0 — released 2025-08-05 and now a cheap, self-hostable baseline. It is text-only and single-turn strong but weak on long-horizon agent loops. **Folder-meta correction:** this repo's `meta.json` is a placeholder ("Gpt Oss 120b", "128K total", "Standard pricing"); verified facts are a 131K context, text-only I/O and $0.03–$0.15 in / $0.15–$0.595 out per 1M across providers (I did not modify `meta.json`).
- **Provider / access:** open weights on Hugging Face plus roughly 20 API providers (Artificial Analysis); tracked Zen id `opencode/gpt-oss-120b`, and the OpenAI-compatible serving stack can also self-host. Reasoning effort low / medium / high; function calling and structured outputs supported.
- **Release / knowledge:** released 2025-08-05 (evals.report and BenchmarkList agree); knowledge cutoff 2024-05-31 (Artificial Analysis).
- **Context window:** 131,072 tokens (Artificial Analysis; its FAQ rounds this to 130K). Max output not published.
- **Modalities:** text in → text out only — AA explicitly lists it as not multimodal and unable to accept images.
- **Pricing (as of 2026-09-24):** provider median $0.15 in / $0.595 out per 1M (AA; blended $0.18 per 1M), with the cheapest route at $0.03 in / $0.15 out (BenchmarkList). Free only via self-hosting — no Zen Free ID.
- **Architecture:** Mixture of Experts, 117B total / 5.1B active parameters, Apache 2.0 license, weights on Hugging Face.

### Raw benchmarks found

Agent / tool use:

- MCP-Bench: **0.69** (BenchmarkList, 89th percentile, rank 3 of 20); MCP-Universe: **25.54%** overall success rate (verified)
- τ²-bench (Telecom): **65.8% pass^1** (official) — Tau2-Bench Telecom 65.8% (rank 114 of 332)
- GDPval: **947 Elo** (official); GDPval-AA: **803** (59th percentile, rank 139 of 340)
- Time to REFLECT (evidence-based research agents): **46.5%** (92nd percentile, rank 2 of 14); TIDE (test-time improvement): **73.7%**; WildAgtEval: **62.5%**
- Terminal-Bench Hard: **23.5%** (71st percentile, rank 96 of 326); Terminal Bench: **18.7%**; APEX-Agents: **14.5%**; APEX-Agents-AA: **3.1%**
- AutomationBench: **0.1%** (rank 42 of 42); MCPMark: **4.7%** (rank 39 of 41); Vending-Bench 2: **−21.53** (rank 52 of 54); AA-Briefcase: **9** (5th percentile) — long-horizon agent loops are the clear weak spot

Reasoning / knowledge:

- GPQA Diamond: **75.8%** (official); MMLU-Pro: **80.8%** (verified); Global-MMLU: **82.8%**
- AIME (OTIS Mock): **88.9%** (official); IFBench: **69.0%**; MultiChallenge: **45.34%** (verified); MultiNRC: **15.17%**
- AA-Omniscience Index: **−49** (official knowledge/hallucination composite); SimpleQA Verified: **13.9%**; Vectara hallucination rate: **14.2%**; MASK honesty score: **92.00**
- Artificial Analysis Intelligence Index: **33.3 at launch** (unverified, 2025-08-05); the current AA profile (high effort, index v4.3.2) records **12**, above the open-weight-class median of 8
- Epoch Capabilities Index: **120.72** (#140 of 398); LMArena: **1365 Elo**; EQ-Bench Creative Writing v3: **1041 Elo**; Design Arena: **1017 Elo**

Multimodal:

- No vision, audio or video rows — the model is text-only by design (AA: "not multimodal"), so MMMU-style benchmarks do not apply

Coding:

- LiveCodeBench: **87.8% pass@1** (unverified aggregator run); Multi-LCB (multi-language extension): **83.6%** (rank 1 of 26); LiveCodeBench Pro: **1299 Codeforces Elo** (official)
- SWE-bench Pro: **16.20%** resolved (official); Aider Polyglot: **41.8%**; SciCode: **38.9%** (unverified); WeirdML: **48.2%**
- SWE-bench Verified / Terminal-Bench 2.x: no verified public score found

Long context:

- No MRCR / RULER / needle-in-a-haystack or AA-LCR measurement was published for the 131K window in any source checked; the closest proxies are single-shot document rows such as AA-Briefcase 9 and AgentDrive 11.5%

### Normalized scores (1–100)

- **Tool use: 52/100.** Genuine tool-use strengths (MCP-Bench 0.69, rank 3 of 20; τ²-Bench Telecom 65.8%; GDPval 947 Elo) are undercut by the long-horizon floor — AutomationBench 0.1%, Vending-Bench 2 −21.53, MCPMark 4.7%, APEX-Agents-AA 3.1% — which caps the dimension hard.
- **Reasoning: 48/100.** Strong 2025 numbers (GPQA Diamond 75.8%, MMLU-Pro 80.8%, AIME OTIS 88.9%) against a 2026 field, with the AA-Omniscience index at −49 and MultiNRC 15.17% exposing the knowledge/hallucination trade-off; capped by the missing HLE/ARC-AGI evidence and the current index of 12.
- **Context window: 58/100.** 131K tokens with a May-2024 knowledge cutoff and no retrieval measurement at all — a mid-tier window in a 1M-token field, capped by the complete absence of long-context evidence.
- **Multimodal: 15/100.** Text in / text out only, with AA confirming no image input — the text-only floor.
- **Coding: 55/100.** LiveCodeBench 87.8% and Multi-LCB 83.6% (rank 1 of 26) look strong, but SWE-bench Pro 16.20% resolved and Aider Polyglot 41.8% show the repo-scale gap, and no SWE-bench Verified row exists.
- **Cost efficiency: 88/100.** $0.03–$0.15 in / $0.15–$0.595 out per 1M across ~20 providers plus Apache-2.0 weights that can be self-hosted at no licence cost; capped only because no hosted route is $0.
- **Overall Score: 45.6/100.** Mean of the five quality dimensions (52 + 48 + 58 + 15 + 55) / 5 = 45.6; best fit is cheap self-hosted single-turn reasoning and code generation, not long-horizon agents or multimodal work.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-24
- Method: public internet research — evals.report's labeled per-benchmark rows (official / verified / unverified) for GPQA Diamond, AIME (OTIS Mock), MMLU-Pro, SWE-bench Pro, LiveCodeBench Pro, τ²-bench, GDPval, MCP-Universe, AA-Omniscience and the Vectara leaderboard; Artificial Analysis for the Intelligence Index, parameters (117B/5.1B), licence, knowledge cutoff, context, pricing, speed and modality confirmation; BenchmarkList third-party harness rows for the agentic tail (AutomationBench, Vending-Bench 2, MCPMark, APEX-Agents-AA, AA-Briefcase) and ECI. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
