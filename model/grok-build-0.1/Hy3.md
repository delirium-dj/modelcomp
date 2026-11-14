# Grok Build 0.1 — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Grok Build 0.1 is xAI's terminal-native coding agent (early beta, released 2026-05-14; open-sourced 2026-07-15). Built on the Grok 4.3 beta model, it uses a 16-agent architecture (up to 8 concurrent agents) with plan mode and parallel sub-agent scheduling, and can manage Git repos, local files, and dev servers. It supports VS Code integration, MCP services, headless mode, and the ACP protocol, and includes an Imagine tool for image/video generation. Pricing was ~$1/M at beta; xAI positioned it to reach Claude Code-level task performance.

## Model card
| Field | Value |
|---|---|
| Vendor | xAI (SpaceXAI) |
| Release | 2026-05-14 (beta); open-sourced 2026-07-15 |
| Base | Grok 4.3 beta |
| Architecture | 16-agent (up to 8 concurrent) terminal agent |
| Modalities | Text + image gen (Imagine tool) |
| Integrations | VS Code, MCP, headless, ACP |

## Raw benchmarks
- **Agent / Tool use:** Plan mode, parallel sub-agents, Git/dev-server control; MCP + ACP.
- **Reasoning:** Built on Grok 4.3 beta; agentic orchestration focus.
- **Coding:** Targets Claude Code-level task performance; fast coding model.
- **Long context:** Not explicitly specified in reviewed sources.

## Normalized scores
- **Tool use: 78/100.** Rich agent orchestration; MCP/ACP/VS Code.
- **Reasoning: 72/100.** Grok 4.3-beta base; agentic focus.
- **Context window: 70/100.** Not explicitly published; estimated.
- **Multimodal: 70/100.** Imagine tool for image/video gen.
- **Coding: 78/100.** Fast coding agent; Claude-Code-class target.
- **Cost efficiency: 75/100.** ~$1/M beta pricing.
- **Overall Score: 73.6/100.** Mean of the five quality dims (78+72+70+70+78 = 368 / 5 = 73.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://blog.csdn.net/weixin_32296621/article/details/162184681
  - https://baike.baidu.com/item/Grok%20Build/67788598
  - https://cloud.tencent.com/developer/article/2680275
  - https://zhuanlan.zhihu.com/p/2043356014481774020
  - https://blog.csdn.net/weixin_52208686/article/details/163100920
