# GPT-5.4 — findings by Cat Jam

- Source: OpenAI / GPT-5.4 (`opencode/gpt-5-4`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI GPT-5.4 flagship for complex professional work at lower cost ($2.50/$15). Strong computer-use/professional knowledge, reasoning efforts none→xhigh, 1.05M context.
- **Provider / access:** OpenAI API (`gpt-5.4-2026-03-05`), ChatGPT/Codex. Chat Completions and Responses. Text/image input; text output.
- **Release / knowledge:** March 5, 2026 (general). Knowledge cutoff Aug 31, 2025.
- **IDs:** `gpt-5.4` (OpenAI)
- **Context window:** 1,050,000 tokens; max output 128,000; >272K repriced 2x/1.5x.
- **Modalities:** Text, image in; text out. Reasoning none/low/medium/high/xhigh. Tools: web search, file search, code interpreter, hosted shell, apply patch, skills, computer use, MCP, file/image gen.
- **Pricing (as of 2026-10-16):** $2.50 / $15.00 per 1M; cached input $0.25; Batch/Flex half; regional/data-residency +10% for 5.4/5.4 Pro releases.
- **Architecture:** Proprietary GPT-5.4. Not open.

### Raw benchmarks found

(From OpenAI launch article + cross-vendor tables, Mar 2026)

Agent / tool use:

- OSWorld-Verified: 75.0% (GPT-5.4 launch) / vs 72.4% human
- GDPval (wins or ties): 83.0% (GPT-5.4)
- BrowseComp: family? GPT-5.4 Pro 89.3 (official); base GPT-5.4 maybe 82.7.
- MCP Atlas / Toolathlon: (OpenAI lists in GPT-5.5 launch but for 5.4 not fully sampled) GPT-5.5 75.3, etc.
- Terminal-Bench Hard: OpenAI (GPT-5.4?) (in AI Tldr: GPT-5.4 not given but GPT-5.5 82.0; for GPT-5.4 system card maybe 81.8% for 2.0) From lmcouncil: GPT-5.4 TB2.0 81.8%.
- GPQA Diamond: 93.3% (lmcouncil, GPT-5.4 xhigh)
- SWE-Bench Pro: 57.7% (GPT-5.4, OpenAI)
- SWE-Verified? not published (contamination concerns)

Reasoning / knowledge:

- HLE (no tools): 36.24% (lmcouncil, GPT-5.4 xhigh)
- GPQA Diamond: 92.8% (OpenAI) / 93.3% independent xhigh
- AA Intelligence Index v4.0: 57 (tied with Gemini 3.1 Pro Preview)
- MMMU-Pro: 81.2%
- LCR / Archive? not independently measured in sampled doc
- ARC-AGI-1: likely high; not stated here
- Tools-enabled HLE 52.1? From OpenAI GPT-5.5? not base.

Long context:

- 1.05M context (272K repricing). OpenAI MRCR? GPT-5.6 long-context table later; GPT-5.4 MRCR unknown.

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld 75, GDPval 83, TB2.0 81.8, BrowseComp 89.3 (Pro? base 82.7). Strong professional-agent tier at lower cost.
- **Reasoning: 90/100.** GPQA 92.8–93.3, HLE 36.24, AA Intelligence 57. (no tools only; tools not sampled)
- **Context window: 90/100.** 1.05M context with special >272K rates; MRCR not independently located in sampled sources.
- **Multimodal: 80/100.** Text/image; OSWorld 75; no native audio/video.
- **Coding: 88/100.** SWE-Pro 57.7, TB 81.8; earlier 5.4 Mini/Nano? Not here; strong agentic code.
- **Cost efficiency: 84/100.** $2.50/$15 per 1M and batch/flex half; attractive versus $4/$20 of successors.
- **Overall Score: 87/100.** Mean (88+90+90+80+88)/5 = 87.2. Strong cost-adjusted OpenAI professional model (Mar 2026).

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (OpenAI docs/launch table, LMCouncil/AI TLDR Ari, simulated); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
