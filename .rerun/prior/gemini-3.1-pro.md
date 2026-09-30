# Gemini 3.1 Pro — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`gemini-3.1-pro-preview`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (preview)
- **Short description:** DeepMind's 2026-02-19 Pro-tier flagship, still the most broadly served Pro preview: best verified academic reasoning in this scan (94.3% GPQA Diamond, 77.1% ARC-AGI-2) and the full multimodal input stack, but mid-pack agentic scores against models shipped after it.
- **Provider / access:** Google — Gemini API, AI Studio, Google AI Mode, Gemini app; ID `gemini-3.1-pro-preview`. Native Gemini endpoint plus OpenAI-compatible gateways.
- **Release / knowledge:** Released 2026-02-19 (preview). Knowledge cutoff: no verified public value found.
- **IDs:** `gemini-3.1-pro-preview` (no Zen Free ID — paid only).
- **Context window:** 1,048,576 (1M) input tokens; 64K output. Verified 2026-09-29 from DeepMind's model-information block on the Gemini Pro page.
- **Modalities:** text, image, video, audio, PDF input; text output; native reasoning; function calling, structured output, search-as-a-tool, code execution.
- **Pricing (as of 2026-09-20, carried forward):** $2.00 / 1M in and $12.00 / 1M out up to 200K input tokens; a request above 200K input is billed the long-context rate for the whole request. No rate change surfaced this run; DeepMind now advertises "Gemini 3.5 Pro coming", so supersession is expected.
- **Architecture:** proprietary sparse Mixture-of-Experts Transformer; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (vendor table, Thinking High, unless noted):

- Terminal-Bench 2.0: **68.5%** (Terminus-2 harness)
- τ2-bench: retail **90.8%**, telecom **99.3%**
- MCP Atlas: **69.2%**; BrowseComp: **85.9%** (search + Python + browse)
- APEX-Agents: **33.5%** — launched top of Mercor's independent APEX-Agents board (TechCrunch, 2026-02)
- GDPval-AA: **Elo 1317** — behind Claude Sonnet 4.6 (1633) and Opus 4.6 (1606) on Artificial Analysis' blind-pairwise board
- SWE Atlas Codebase QnA, Claw-Eval / ClawProBench, Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (no tools) — best verified academic-reasoning score found anywhere in this scan
- HLE: **44.4%** no tools; **51.4%** with search (blocklist) + code
- ARC-AGI-2 (ARC Prize Verified): **77.1%** vs Gemini 3 Pro's 31.1%
- MMMLU: **92.6%**; MMMU-Pro: **80.5%**
- LCR / MLCR, CritPt, AA-Omniscience accuracy / hallucination rate: **no verified public score found**

Coding:

- SWE-bench Verified: **80.6%** vendor (single attempt) — independent Vals.ai board lists the 02/26 preview at **78.80%**, third behind GPT-5.5 and Claude Opus 4.7
- SWE-bench Pro (Public): **54.2%** (single attempt); GPT-5.2 records 55.6%
- LiveCodeBench Pro: **Elo 2887** (reported as Elo, not a percentage)
- SciCode: **59%**
- Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- MRCR v2 (8-needle): **84.9%** at 128k average, **26.3%** pointwise at 1M — capacity is real, depth recall degrades sharply

### Normalized scores (1–100)

- **Tool use: 73/100.** Terminal-Bench 2.0 68.5%, BrowseComp 85.9% and MCP Atlas 69.2% are solid, but τ2 retail 90.8% and GDPval-AA 1317 trail Claude Sonnet 4.6/Opus 4.6: top-of-board in February, overtaken within two months.
- **Reasoning: 92/100.** GPQA 94.3% and ARC-AGI-2 77.1% are the best verified academic numbers here; HLE 44.4% without tools (51.4% with search + code) keeps it below the mid-90s.
- **Context window: 95/100.** Verified 1M input with 64K output sits at the floor of the ≥1M band; capped by 26.3% MRCR pointwise recall at 1M.
- **Multimodal: 90/100.** Text, image, video, audio and PDF in with text out; text-only output and no media generation stop it short of the top.
- **Coding: 88/100.** SWE-bench Verified 80.6% vendor / 78.80% independent, SWE-bench Pro 54.2%, LiveCodeBench Pro Elo 2887 — frontier-adjacent; the vendor-vs-independent SWE gap caps it.
- **Cost efficiency: 70/100.** $2.00/$12.00 per 1M sits between the ~88 anchor ($1.25/$4.25) and the ~60 anchor ($3/$15), and the >200K-input surcharge taxes exactly the 1M-context use case this model is bought for.
- **Overall Score: 88/100.** (73 + 92 + 95 + 90 + 88) / 5 = 87.6 → **88**. Best fit: scientific/financial reasoning and document-heavy multimodal analysis where knowledge depth matters more than terminal-agent autonomy.

## Re-run audit — 2026-09-29

Previous DeepSeek 4.1 Flash file: 2026-09-20. After re-verifying against live sources:

- Added the official DeepMind eval table (τ2 retail/telecom, MCP Atlas, APEX-Agents) and the independent Vals.ai SWE-bench snapshot, which the previous run only partially had.
- LiveCodeBench correction: DeepMind reports LiveCodeBench Pro as Elo 2887, so the previous percentage framing was wrong.
- New evidence lowers the agentic band: GDPval-AA Elo 1317 vs Sonnet 4.6's 1633; independent SWE-bench Verified 78.80% vs the vendor's 80.6%.
- New long-context caveat: MRCR v2 drops from 84.9% at 128k to 26.3% pointwise at 1M.
- Dimension scores unchanged (Tool 73, Reasoning 92, Context 95, Multimodal 90, Coding 88, Cost 70); headline Overall unchanged.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-29
- Method: public internet research re-run (DeepMind Gemini Pro model page, Inferred Research's independent analysis citing Mercor/TechCrunch/Vals.ai/LMArena, Artificial Analysis GDPval-AA board); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Astra.md`, using the same headings.
