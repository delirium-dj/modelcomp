# Mistral Medium 3.5 — findings by DeepSeek 4.1 Flash

- Source: Mistral AI/Mistral Medium 3.5 (`mistral-medium-26.04`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5 (docs version tag `v26.04`)
- **Short description:** Mistral's "frontier-class multimodal model optimized for agentic and coding use cases" — a 128B **dense** (all parameters active) open-weight model that consolidates three earlier models into one endpoint: Mistral Medium 3.1 (chat), Magistral (reasoning) and Devstral 2 (Vibe coding agent). It powers Mistral's cloud "remote agents" in Vibe and the Le Chat Work mode. Not an alias of Mistral Large 3 or Mistral Small 4.
- **Provider / access:** Mistral AI API (`mistral-medium-latest`, v26.04; Studio/Vibe/Le Chat) plus open weights on Hugging Face and NVIDIA NIM / build.nvidia.com. Text + image input with adjustable `reasoning_effort`; synchronous tool calling.
- **Release / knowledge:** conflicting dates on the pages checked — official Mistral blog post dated **2026-05-22**, ChatForest records **2026-04-29**, BenchmarkList **2026-04-28**; the `v26.04` tag suggests the April checkpoint, so treat April–May 2026 as the release window. Knowledge cutoff not published.
- **IDs:** `mistral-medium-latest` / v26.04 (successor to `mistral-medium-2508`); Zen route `opencode/mistral-medium-3.5`. No Free ID verified → cost scored on paid pricing.
- **Context window:** 256K tokens (ChatForest review of the vendor card; not exposed on the docs overview page checked). Max output not published.
- **Modalities:** text + image in → text out; reasoning yes (adjustable effort); agentic tool calling; positioned alongside Mistral OCR 4.1 for document intelligence.
- **Pricing (as of 2026-09-23):** $1.50 in / $7.50 out per 1M tokens (official Mistral blog card); cached-input rate not published; sold on Pro/Team/Enterprise plans rather than as a free tier.
- **Architecture:** 128B dense open-weight model (not MoE) under a **modified MIT licence** with a $20M/month revenue cap — a deliberate narrowing versus the Apache-2.0 Devstral 2 it replaces. Self-hosting needs roughly 256GB VRAM.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **50.6%** task success; Terminal-Bench 2.0 **30.3%**; Terminal-Bench Hard **33.3%** (BenchmarkList, checked 2026-09-22)
- Tau3-Banking: **15.1%** pass@1; Tau2-Bench Telecom **94.2%** (BenchmarkList — the same model scores very differently across the two harness versions)
- GDPval-AA **936 Elo**; AA-Briefcase **517**; AutomationBench-AA **13.7%**; Gert Labs Rankings **37.3%** (BenchmarkList)
- Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**
- Vendor claims (unquantified): parallel cloud coding agents, Work mode cross-tool workflows, synchronous tool calling in Vibe/Le Chat.

Reasoning / knowledge:

- GPQA Diamond: **74.8%** (BenchmarkList "Reasoning" row) versus **34.8%** (BenchmarkList "Intelligence" row) — a direct conflict inside one source; both recorded, neither averaged
- HLE **13.8%**; CritPt **0.0%** (rank 30 of 31) — BenchmarkList
- LCR / MLCR: **AA-LCR 65.3%**; Context Arena **17.6%** (rank 44/51) and **32.0%** (rank 28/30) — weak long-context retrieval
- Artificial Analysis Intelligence Index **30.4** (rank 115/418); AIIQ composite IQ **98**; Epoch Capabilities Index **123.87** (#123 of 398, open-weight #52); MMLU Pro **75.3%**; ObviousBench **91.7%**; IFBench **0.688**; ProofBench **10.0%**; Vals Index **37.8%**
- Factuality: AA-Omniscience **-36.8** (4th percentile, rank 27/28); SAGE **37.6%**; MedScribe **67.7%**

Coding:

- SWE-bench Verified: **77.6%** per the vendor's launch claim (MarkTechPost headline, 2026-05-02) versus **66.4%** on the independent BenchmarkList table (rank 58 of 72) — a ~11-point vendor/independent gap, both recorded
- SWE-bench Pro / DeepSWE / LiveCodeBench: **no verified public score found**
- SciCode **39.6%**; Vibe Code Bench v1.1 **2.9%** (rank 66 of 71 — very weak agentic coding); WebDev Arena **1265.16**; Design Arena **1162**; MedCode **33.8%**

Long context:

- AA-LCR 65.3% and Context Arena 17.6%/32.0% both point to limited effective utilisation of the 256K window despite the headline size.

### Normalized scores (1–100)

- **Tool use: 68/100.** Tau2-Bench Telecom 94.2% is a genuinely strong single signal and Terminal-Bench 2.1 50.6% sits mid band, but Tau3-Banking 15.1% on the newer harness, GDPval-AA 936 Elo, AutomationBench-AA 13.7% and AA-Briefcase 517 show the agentic ceiling is well below frontier; no Claw/MCP/Toolathon score exists to fill the gap.
- **Reasoning: 62/100.** GPQA Diamond is internally contradictory (74.8% vs 34.8% in one table, neither averaged), HLE 13.8% and AA Index 30.4 place it in the mid band (GPQA 60–80%, Index 20–35 → 55–65), and CritPt 0.0% ends the argument.
- **Context window: 71/100.** 256K sits in the 200K–500K band (65–84, with 200K = 70); held near the bottom because AA-LCR 65.3% and Context Arena 17.6%/32.0% show weak retrieval at depth, and max output is unpublished.
- **Multimodal: 64/100.** Text + image in → text out is the "+image in = 60–70" band (MMMU-Pro 64.9%, Vals Multimodal Index 34.8%); no audio/video input and no non-text output.
- **Coding: 68/100.** Independent SWE-bench Verified 66.4% (vendor claims 77.6%) with SciCode 39.6% under the 55% frontier reference and Vibe Code Bench 2.9% far below the 10% trap the methodology calls out — mid-band coding with a weak agentic-coding tail.
- **Cost efficiency: 73/100.** $1.50 in / $7.50 out per 1M is a ~3.75× premium over the Medium 3.1 it replaces and sits between the ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors; the modified-MIT revenue cap is a licensing cost rather than a $ cost, so it is noted but not scored.
- **Overall Score: 67/100.** (68 + 62 + 71 + 64 + 68) / 5 = 66.6 → **67**. Best fit: EU-hosted, self-hostable mid-tier agentic coding and document work with adjustable reasoning — not a frontier-coding substitute, and its licence cap should be checked before shipping.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (Mistral official launch post for version/pricing/licence/positioning, Mistral docs model overview for IDs and lifecycle, ChatForest review for context window and architecture, BenchmarkList 44-row evidence table for measured scores); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
