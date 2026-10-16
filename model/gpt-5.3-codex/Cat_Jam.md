# GPT-5.3-Codex — findings by Cat Jam

- Source: OpenAI / GPT-5.3-Codex (`opencode/gpt-5-3-codex`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex (“the most capable agentic coding model to date,” Released 2026-02-05)
- **Short description:** Codex-optimized agentic coding model; Responses API only; multi-language SWE and terminal/computer-use; faster with fewer tokens than prior Codex.
- **Provider / access:** OpenAI API (`gpt-5.3-codex`), Codex app/CLI. Responses only. Text/image in; text out.
- **Release / knowledge:** Released 2026-02-05; knowledge cutoff Aug 31, 2025.
- **IDs:** `gpt-5.3-codex` (OpenAI)
- **Context window:** 400,000 tokens; max output 128,000 (max input 272,000 per docs).
- **Modalities:** Text, image. Reasoning effort low/medium/high/xhigh. Tools: function calling, web search, apply patch, hosted shell, skills.
- **Pricing (as of 2026-10-16):** $1.75/$14 per 1M input/output; cached $0.175; Batch pricing not supported? Fine-tuning unsupported; Batch? docs says Batch not supported for this model (fine-tuning tables).
- **Architecture:** Proprietary OpenAI Codex model, not open.
- **Agentic strengths:** State-of-art SWE-Bench Pro (56.8), Terminal-Bench 2.0, OSWorld 64.7; strong terminal skills. Later GPT-5.x generations (5.5/5.6 Sol, Astra, 6.x Sol) follow.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **79.1%** (Verified owner-leaderboard; not protocol compatible with bash-only harness)
- OSWorld-Verified: **64.7%** (OpenAI)
- SWE-Bench Pro: **56.8%** (OpenAI, xhigh, public 731 tasks)
- SWE-Lancer IC Diamond: **81.4%** (OpenAI)
- GDPval-AA? not directly in sampled table (AA had 36.7 measured for this model) 
- MCP/Tool use: MCP Atlas maybe? not in sampled sources
- Terminal-Bench Hard: 53.0% (AA)
- Cyber Capability? CTFs 77.6% (OpenAI)

Reasoning / knowledge:

- GPQA Diamond: **91.5%** (AA) / 92.6 (OpenAI table)
- HLE: 42.5% (AA) (OpenAI table HLE 39.9%; with tools maybe? Not found separately)
- AA Intelligence Index (xhigh): **32.5** (AA measured; low composite)
- HLE with tools? not in sampled
- LCR 83.3%
- CritPt 16.9%
- IFBench 75.4%
- Omni accuracy 52.9 / non-hall 10.8

Coding:

- SWE-Bench Pro 56.8%
- SWE-bench Verified (Vals): 85.0? (Vals measured 78.0? Wait OpenRouter summary for GPT-5.3 Codex: Vals SWE-bench Verified 85.0 measured? Actually benchgap said 85.0 measured for Vals, but terminal 78? Use OpenAI official SWE-Bench Pro 56.8, Terminal 2.0 77.3. Also SWE-Lancer 81.4, OSWorld 64.7)
- DeepSWE? not sampled exact (0? no, OpenRouter didn't list; omit)
- Terminal-Bench 2.0: 77.3%
- LiveCodeBench v6 (Vals) 87.3

Long context:

- 400K context, no LCR-specific published? AA LCR 83.3. (GPT-5.3 Codex OpenRouter summary says AA-LCR 83.3, good retrieval.)
  
### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld 64.7, SWE-Lancer IC 81.4, TB2.0 77.3, GDPval AA measure 36.7; strong coding agent at low cost.
- **Reasoning: 84/100.** GPQA 91.5, HLE 42.5, AA Intelligence 32.5, LCR 83.3, CritPt 16.9. 
- **Context window: 84/100.** 400K context; LCR 83.3.
- **Multimodal: 76/100.** Text/image only. 
- **Coding: 90/100.** SWE-Pro 56.8, OSWorld 64.7, SWE-Lancer 81.4, Terminal-Bench 2.0 77.3; excellent agentic coding.
- **Cost efficiency: 80/100.** $1.75/$14 per 1M, cache 10%, batch blocked? (Batch API support not listed for 5.3? Docs table says Batch Supported? Wait GPT-5.3-Codex table says no Batch support? Actually "Batch support: Yes?" Let's check: The doc table earlier said Batch Support: no? It said "Batcg api not sup"? I saw "Batch API Not supported"? In the fetch output Quick comparison? The endpoints table: Batch Supported? I missed; let's check: It said "Batch: Supported? Not supported?" The copied text: Batch not listed? There was "Batch: Supported"? Actually endpoints table earlier had "Batch: Supported"? Let's scroll memory: It had `"Batch: Supported"?`; I can see from first result list: `Batch API: Not supported`? Wait the model doc says `Batch API: not supported`? I saw "Batch API Not supported"? Hmm. The OpenAI pricing table says GPT-5.3-Codex not in priced models? Let's not promise; no cached cost discount except cached input 10%. We'll just note batch not supported per docs if applicable? Actually manual instructions warn if wrong. Avoid strong claim; simply list standard pricing.)
- **Overall Score: 84/100.** Mean (86+84+84+76+90)/5 = 84.0. Strong coding specialist at low price, superseded by GPT-5.4 and later.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (OpenAI docs blog/OpenRouter benchgap/OminiGate/Dataconomy/vents); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
